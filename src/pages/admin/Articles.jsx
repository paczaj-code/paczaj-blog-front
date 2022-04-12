import React, { useEffect, useState, Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import Switcher from '../../components/atoms/Switcher/Switcher';
import { useHttp } from '../../hooks/useHttp2';
import IconActionButton from '../../components/atoms/Button/IconButton';

import styled from 'styled-components';

const StyledTableWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;
const Articles = () => {
  let navigate = useNavigate();
  const [articles, setArticles] = useState(null);
  // const [itemId, setItemId] = useState(null);
  const { isLoading, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest({ url: '/article?perPage=333&page=1&filter', method: 'GET' }, setArticles);
  }, []);

  const goToForm = (e) => {
    const row = e.target.parentNode.parentNode.parentNode;
    const id = row.querySelectorAll('.id')[0].innerText;
    console.log(id);
    navigate(`/administration/article-form/${id}`, { replace: true });
  };

  console.log(articles);
  return (
    <MainTemplate>
      <div>Articles</div>
      <NavLink to="/administration/article-form/new">Nowy artykuł</NavLink>
      {!isLoading && articles && (
        <StyledTableWrapper>
          <table width="100%">
            <thead>
              <tr>
                <th className="text-left">Nazwa</th>
                <th className="text-left">Kategoria</th>
                <th>Włączony?</th>
                <th>Utworzono</th>
                <th>Zmodyfikowano</th>
              </tr>
            </thead>
            <tbody>
              {articles.items.map((article) => {
                return (
                  <tr key={article._id}>
                    <td className="id hidden">{article._id}</td>
                    <td>{article.title}</td>
                    <td className="text-left">
                      <i className={article.category.icon}></i>
                      &nbsp;
                      {article.category.name}
                    </td>
                    <td className="text-center">
                      <Switcher
                        name="isEnabled"
                        value={article._id}
                        notCheckedColor="red"
                        switchColor="green"
                        defaultChecked={article.isEnabled}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">{article.createdAt}</td>
                    <td className="text-center">{article.modifiedAt}</td>
                    <td>
                      <IconActionButton type="edit" onClick={goToForm} />
                      &nbsp; &nbsp;
                      <IconActionButton type="delete" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StyledTableWrapper>
      )}
    </MainTemplate>
  );
};

export default Articles;
