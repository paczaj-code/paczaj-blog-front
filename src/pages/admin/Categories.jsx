import React, { useEffect, useState, Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Switcher from '../../components/atoms/Switcher/Switcher';
import { useHttp } from '../../hooks/useHttp2';
import MainTemplate from '../../templates/MainTemplate';
import styled from 'styled-components';
import IconActionButton from '../../components/atoms/Button/IconButton';
import axios from 'axios';

const StyledTableWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const Categories = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [itemId, setItemId] = useState(null);
  const { isLoading, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest({ url: '/get-categories?admin=true', method: 'GET' }, setCategories);
  }, []);

  const toggleIsEnabled = (e) => {
    axios({
      method: 'PATCH',
      url: `/main-category/${e.target.value}`,
      data: { isEnabled: e.target.checked }
    });
  };

  const goToForm = (e) => {
    const row = e.target.parentNode.parentNode.parentNode;
    const id = row.querySelectorAll('.id')[0].innerText;
    console.log(id);
    navigate(`/administration/category-form/${id}`, { replace: true });
  };

  console.log(isLoading);

  return (
    <MainTemplate>
      <NavLink to="/administration/category-form/new">Nowa Kategoria</NavLink>
      {!isLoading && categories && (
        <StyledTableWrapper>
          <table width="100%">
            <thead>
              <tr>
                <th className="text-left">Nazwa</th>
                <th>Ikona</th>
                <th>Włączony?</th>
                <th>Utworzono</th>
                <th>Zmodyfikowano</th>
              </tr>
            </thead>
            <tbody>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <Fragment key={category._id}>
                      <tr>
                        <td className="id hidden">{category._id}</td>
                        <td className="text-left">{category.name}</td>
                        <td className="text-center">
                          <i className={`${category.icon} icon-lg`}></i>
                        </td>
                        <td className="text-center">
                          <Switcher
                            name="isEnabled"
                            value={category._id}
                            notCheckedColor="red"
                            switchColor="green"
                            defaultChecked={category.isEnabled}
                            onChange={toggleIsEnabled}
                          />
                        </td>
                        <td className="text-center">{category.createdAt}</td>
                        <td className="text-center">{category.modifiedAt}</td>
                        <td>
                          <IconActionButton type="edit" onClick={goToForm} />
                          &nbsp; &nbsp;
                          {category.subCategories.length === 0 && (
                            <IconActionButton type="delete" />
                          )}
                        </td>
                      </tr>
                      {category.subCategories.map((subCategory) => {
                        return (
                          <tr key={subCategory._id} className="subRow">
                            <td className="id hidden">{subCategory._id}</td>
                            <td className="subRow">{subCategory.name}</td>
                            <td className="text-center">
                              <i className={`${subCategory.icon} icon-lg`}></i>
                            </td>
                            <td className="text-center">
                              <Switcher
                                name="isEnabled"
                                value={subCategory._id}
                                notCheckedColor="red"
                                switchColor="green"
                                defaultChecked={subCategory.isEnabled}
                                onChange={toggleIsEnabled}
                              />
                            </td>
                            <td className="text-center">{category.createdAt}</td>
                            <td className="text-center">{category.modifiedAt}</td>
                            <td>
                              <IconActionButton type="edit" onClick={goToForm} />
                              &nbsp; &nbsp;
                              <IconActionButton type="delete" />
                            </td>
                          </tr>
                        );
                      })}
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </StyledTableWrapper>
      )}
    </MainTemplate>
  );
};

export default Categories;
