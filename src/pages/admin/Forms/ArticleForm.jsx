import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainTemplate from '../../../templates/MainTemplate';
import { useHttp } from '../../../hooks/useHttp2';
import { useFormik } from 'formik';
import Switcher from '../../../components/atoms/Switcher/Switcher';
import Divider from '../../../components/atoms/Divider/Divider';
import * as Yup from 'yup';
import FormikInput from '../../../components/molecules/FormikInput/FormikInput';
import styled from 'styled-components';
import FormikLabel from '../../../components/atoms/FormikLabel/FormikLabel';
import FormikSelect from '../../../components/molecules/FormikSelect/FormikSelect';
import Codemirror from '../../../components/atoms/Codemirror/Codemirror';
import Button from '../../../components/atoms/Button/Button';
import axios from 'axios';

const StyledInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-between;
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledCodemirrorWrapper = styled.div`
  width: 90%;
  padding: 0 30px 0 0;
  margin-left: 20px;
`;
const ArticleForm = () => {
  const { articleId } = useParams();
  const [allCategories, setAllCategories] = useState(null);
  const { isLoading, sendRequest, responseCode } = useHttp();
  const [isLoading2, setIsLoadig2] = useState(false);
  const [contentCode, setContentCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    sendRequest({ url: '/main-category', method: 'GET' }, setAllCategories);
  }, []);

  const categories = allCategories && allCategories.filter((el) => el.isMainCategory === false);
  const formik = useFormik({
    initialValues: {
      title: '',
      isEnabled: false,
      categoryId: '',
      picture: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Pole jest wymagane'),
      categoryId: Yup.string().required('Pole jest wymagane'),
      picture: Yup.string()
    }),
    onSubmit: (values) => {
      setIsSubmitted(formik.isValid && formik.isSubmitting);
    }
  });

  useEffect(() => {
    if (articleId !== 'new') {
      setIsLoadig2(true);
      axios
        .get(`/article/${articleId}`)
        .then((response) => {
          console.log(response.data);
          formik.setFieldValue('title', response.data.title, false);
          formik.setFieldValue('isEnabled', response.data.isEnabled);
          formik.setFieldValue('categoryId', response.data.categoryId[0]);
          response.data.picture && formik.setFieldValue('picture', response.data.picture);
          setContentCode(response.data.content);
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        })
        .finally(() => {
          setIsLoadig2(false);
        });
    }
  }, [articleId]);

  const method = articleId && articleId === 'new' ? 'POST' : 'PUT';
  const url = articleId && articleId === 'new' ? '/article' : `/article/${articleId}`;

  const body = {
    ...formik.values,
    content: contentCode
  };

  useEffect(() => {
    if (isSubmitted) {
      axios({
        method,
        url,
        data: body
      })
        .then((response) => {
          console.log(response);
        })
        .finally(() => {
          setIsSubmitted(false);
        });
    }
  }, [isSubmitted]);

  return (
    <MainTemplate>
      <h3>{articleId === 'new' ? 'Nowy artykuł' : ''}</h3>
      <Divider />
      {categories && !isLoading2 && (
        <form onSubmit={formik.handleSubmit} style={{ position: 'relative' }}>
          <StyledInputsWrapper>
            <FormikInput
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Tytuł artykułu"
              value={formik.values.title.trimStart()}
              touched={formik.touched.title}
              errors={formik.errors.title}
              placeholder="Podaj tytuł"
            />
          </StyledInputsWrapper>
          <Divider />
          <br />
          <StyledInputsWrapper>
            <StyledCodemirrorWrapper>
              <FormikLabel label="Artykuł"></FormikLabel>
              <Codemirror setStateFunc={setContentCode} codeValue={contentCode} />
            </StyledCodemirrorWrapper>
            <StyledActionsWrapper>
              <FormikInput
                type="text"
                name="picture"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Obrazek"
                value={formik.values.picture.trimStart()}
                touched={formik.touched.picture}
                errors={formik.errors.picture}
                placeholder="Obrazek"
              />
              <FormikSelect
                name="categoryId"
                label="Kategoria"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.categoryId}
                errors={formik.errors.categoryId}
                optionItems={categories}
                valueKey="_id"
                labelKey="name"
              />
              <br />
              <div>
                <FormikLabel labelFor="isEnabled" label="Właczone?"></FormikLabel>
                <Switcher
                  name="isEnabled"
                  notCheckedColor="red"
                  switchColor="green"
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.isEnabled}
                />
              </div>
              <br />
              <div>
                <Button type="submit" btnColor="success" btnBig>
                  Zapisz
                </Button>
              </div>
            </StyledActionsWrapper>
          </StyledInputsWrapper>
        </form>
      )}
    </MainTemplate>
  );
};

export default ArticleForm;
