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
const CategoryForm = () => {
  const { categoryId } = useParams();
  let navigate = useNavigate();
  const [isLoading2, setIsLoadig2] = useState(false);
  const [mainCategories, setMainCategories] = useState(null);
  const [descriptionCode, setDescriptionCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, sendRequest, responseCode } = useHttp();
  const [response, setResponse] = useState({});
  const [categoryData, setCategoryData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: '',
      isEnabled: null,
      icon: '',
      isEnabled: false,
      isMainCategory: false,
      mainCategory: null
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required('Pole nazwa jest wymagane'),
      icon: Yup.string().trim().required('Pole ikona jest wymagane'),
      mainCategory: Yup.string().when('isMainCategory', {
        is: false,
        then: Yup.string().required('Field is required'),
        otherwise: Yup.string().nullable()
      })
    }),
    onSubmit: (values) => {
      setIsSubmitted(formik.isValid && formik.isSubmitting);
    }
  });

  useEffect(() => {
    sendRequest({ url: '/main-category-only-main-enabled', method: 'GET' }, setMainCategories);
  }, []);

  useEffect(() => {
    if (categoryId !== 'new') {
      setIsLoadig2(true);
      axios
        .get(`/main-category/${categoryId}`)
        .then((response) => {
          formik.setFieldValue('name', response.data.name, false);
          formik.setFieldValue('type', response.data.type, false);
          formik.setFieldValue('icon', response.data.icon, false);
          formik.setFieldValue('isEnabled', response.data.isEnabled);
          formik.setFieldValue('isMainCategory', response.data.isMainCategory);
          formik.setFieldValue('mainCategory', response.data.mainCategory);
          setDescriptionCode(response.data.description);
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
  }, [categoryId]);

  const method = categoryId && categoryId === 'new' ? 'POST' : 'PUT';
  const url =
    categoryId && categoryId === 'new' ? '/main-category' : `/main-category/${categoryId}`;

  const body = {
    ...formik.values,
    description: descriptionCode
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

  console.log(formik.errors);

  return (
    <MainTemplate>
      <h3>{categoryId === 'new' ? 'Nowa kategoria' : ''}</h3>
      <Divider />
      {mainCategories && !isLoading2 && (
        <form onSubmit={formik.handleSubmit} style={{ position: 'relative' }}>
          <StyledInputsWrapper>
            <FormikInput
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Nazwa"
              value={formik.values.name.trimStart()}
              touched={formik.touched.name}
              errors={formik.errors.name}
              placeholder="Podaj nazwę"
            />
            <FormikInput
              type="text"
              name="icon"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Ikona"
              value={formik.values.icon.trimStart()}
              touched={formik.touched.icon}
              errors={formik.errors.icon}
              placeholder="Podaj ikonę"
            />
          </StyledInputsWrapper>
          <Divider />
          <br />
          <StyledInputsWrapper>
            <StyledActionsWrapper>
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
              <div>
                <FormikLabel labelFor="isMainCategory" label="Kat. głowna?"></FormikLabel>
                <Switcher
                  name="isMainCategory"
                  notCheckedColor="red"
                  switchColor="green"
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.isMainCategory}
                />
              </div>
              {!formik.values.isMainCategory && (
                <FormikSelect
                  name="mainCategory"
                  label="Kategoria główna"
                  value={formik.values.mainCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.mainCategory}
                  errors={formik.errors.mainCategory}
                  optionItems={mainCategories}
                  valueKey="_id"
                  labelKey="label"
                />
              )}
              <br />
              <br />
              <div>
                <Button type="submit" btnColor="success" btnBig>
                  Zapisz
                </Button>
              </div>
            </StyledActionsWrapper>
            <StyledCodemirrorWrapper>
              <FormikLabel labelFor="isMainCategory" label="Opis kategorii"></FormikLabel>
              <Codemirror setStateFunc={setDescriptionCode} codeValue={descriptionCode} />
            </StyledCodemirrorWrapper>
          </StyledInputsWrapper>
        </form>
      )}
    </MainTemplate>
  );
};

export default CategoryForm;
