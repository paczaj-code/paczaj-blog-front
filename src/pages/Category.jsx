/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import styled from 'styled-components';
import { useHttp } from '../hooks/useHttp2';
import { Helmet } from 'react-helmet';
import { AppSettingsContext } from '../context';
import Card from '../components/molecules/Card/Card';
import Spinner from '../components/atoms/Spinner/Spinner';
import { rgba } from 'polished';
import Divider from '../components/atoms/Divider/Divider';
import Title from '../components/atoms/Title/Title';

const StyledCatLinksList = styled.ul`
  list-style: none;
  > li {
    padding: 10px;
  }
`;

const StyledCatLink = styled.a`
  background-color: ${({ theme }) => rgba(theme.blue, 0.6)};
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.5) inset, 0 0 1px 3px rgba(0, 150, 230, 0.9),
    0 0 17px -4px rgba(0, 0, 0, 0.5);
`;
const StyledCategoryWrapper = styled.div`
  /* display: inline-block; */
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  /* width: 95%; */
  /* justify-content: ; */
`;

// const StyledCategoryTitle = styled.h2`
//   font-weight: bolder;
//   text-shadow: ${({ theme }) =>
//     theme.themeName === 'dark'
//       ? '0px 2px 2px rgba(0, 0, 0, 0.5)'
//       : '0px 2px 2px rgba(100, 100, 100, 0.5)'};
//   padding: 10px;
// `;
const StyledArticlesWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-items: start;
  justify-content: center;
  opacity: 0.5;
  transform: scale(0.99);
  transition: all 0.35s;
  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledCSubCategoriesMenu = styled.div`
  margin-right: 100px;
  justify-self: center;
  width: 300px;
`;

const Category = () => {
  const { isLoading, sendRequest } = useHttp();
  const [mainCategoryId, setMainCategoryId] = useState(null);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [mainCategoryName, setMainCategoryName] = useState(null);
  const [mainCategoryIcon, setMainCategoryIcon] = useState(null);
  const [subCategoryIcon, setSubCategoryIcon] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [articles, setArticles] = useState(null);
  const params = useParams();
  const appContext = useContext(AppSettingsContext);
  let navigate = useNavigate();

  const setParams = () => {
    setSubCategoryId(null);
    setMainCategoryId(null);
    setSubCategories([]);
    let subItems;
    if (appContext.menuItems) {
      subItems = appContext.menuItems.filter((item) => item.slug === params.category);
      if (subItems.length === 0) {
        navigate('/not-found');
      }
      setMainCategoryId(subItems.length > 0 ? subItems[0]._id : null);
      setMainCategoryName(subItems.length > 0 ? subItems[0].name : null);
      setMainCategoryIcon(subItems.length > 0 ? subItems[0].icon : null);
      setSubCategories(subItems.length > 0 ? subItems[0].subCategories : null);
      if (params.subCategory) {
        const sub = subItems[0].subCategories.filter((item) => item.slug === params.subCategory);
        sub.length === 0 && navigate('/not-found');
        setSubCategoryId(sub.length > 0 ? sub[0]._id : null);
        setSubCategoryName(sub.length > 0 ? sub[0].name : null);
        setSubCategoryIcon(sub.length > 0 ? sub[0].icon : null);
      }
    }
  };

  console.log(mainCategoryIcon);
  useEffect(() => {
    setParams();
  });

  useEffect(() => {
    setSubCategoryId(null);
    setMainCategoryId(null);
    setParams();
  }, [params]);

  useEffect(() => {
    if (subCategoryId) {
      sendRequest({ url: `/get-articles-by-cat-id/${subCategoryId}`, method: 'GET' }, setArticles);
    }
    if (mainCategoryId && !subCategoryId) {
      setSubCategoryId(null);
      sendRequest(
        { url: `get-articles-by-maincat-id/${mainCategoryId}`, method: 'GET' },
        setArticles
      );
    }
  }, [mainCategoryId, subCategoryId]);

  return (
    <MainTemplate>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{params.subCategory ? subCategoryName : mainCategoryName}</title>
      </Helmet>

      {/* {!isLoading && ( */}
      <>
        {params.subCategory ? (
          <Title label={subCategoryName} icon={subCategoryIcon} />
        ) : (
          <Title label={mainCategoryName} icon={mainCategoryIcon} />
        )}
      </>
      {/* )} */}
      {isLoading && <Spinner />}
      <StyledCategoryWrapper>
        <StyledArticlesWrapper className={!isLoading && 'visible'}>
          {articles &&
            !isLoading &&
            articles.map((article, index) => (
              <Card
                key={article._id}
                title={article.title}
                picture={article.picture ? article.picture : ''}
                icon={article.category.icon}
                categoryName={article.category.name}
                createdAt={article.createdAt}
                goToArticle={() =>
                  navigate(`/category/${params.category}/${article.category.slug}/${article._id}`, {
                    replace: true
                  })
                }
              />
            ))}
        </StyledArticlesWrapper>
        <StyledCSubCategoriesMenu>
          <StyledCatLinksList>
            {!subCategoryId &&
              articles &&
              !isLoading &&
              subCategories.map((subItem) => (
                <li key={subItem._id}>
                  <StyledCatLink as={NavLink} to={`/category/${params.category}/${subItem.slug}`}>
                    <i className={subItem.icon}></i> {subItem.name}
                  </StyledCatLink>
                </li>
              ))}
          </StyledCatLinksList>
        </StyledCSubCategoriesMenu>
      </StyledCategoryWrapper>
    </MainTemplate>
  );
};

export default Category;

//TODO poprawic Hlemet na react-helmet-async
