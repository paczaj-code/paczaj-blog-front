import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import Button from '../../atoms/Button/Button';

const StyledCardWrapper = styled.div`
  position: relative;
  width: 400px;
  margin-right: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 53px -11px rgba(0, 0, 0, 0.8) inset, 0px 3px 6px -1px rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledImage = styled.div`
  width: 100%;
  height: 190px;
  /* justify-self: start; */
  background-size: cover;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 33px -11px rgba(0, 0, 0, 0.5) inset, 0 2px 8px -4px rgba(0, 0, 0, 0.6);
  ${(props) =>
    props.picture &&
    css`
      background-image: url('http://res.cloudinary.com/di3vhekjd/image/upload/c_fill,g_south,h_250,w_400/v1/Blog/${props.picture}');
    `};
`;

const StyledCardTitle = styled.div`
  display: flex;
  align-content: center;

  padding: 5px 10px 0 15px;
  font-weight: bold;
  text-shadow: ${({ theme }) =>
    theme.themeName === 'dark'
      ? '0px 2px 2px rgba(0, 0, 0, 0.5)'
      : '0px 2px 2px rgba(100, 100, 100, 0.5)'};
  > h3 {
    margin-top: 10px;
    font-weight: 600;
  }
`;

const StyledMetaWarpper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
  border-top: solid 1px black;
  > div > p {
    font-size: 1.5rem;
    margin: 0;
    line-height: 1.9rem;
    &.subcategory {
      margin-bottom: 3px;
    }
  }
`;

const Card = ({ title, picture, icon, categoryName, createdAt, goToArticle }) => {
  const { subCategory } = useParams();

  return (
    <StyledCardWrapper>
      <StyledImage picture={picture} />
      <StyledCardTitle>
        <h3>{title}</h3>
      </StyledCardTitle>
      <StyledMetaWarpper>
        <div>
          {!subCategory && (
            <p className="subcategory">
              <i className={icon}></i>
              &nbsp;
              {categoryName}
            </p>
          )}

          <p>
            <i className="icon-calendar"></i>
            &nbsp;
            {createdAt}
          </p>
        </div>
        <div>
          <Button btnColor="teal" btnSmall btnClick={goToArticle} type="button">
            <i className="icon-book-open"></i> Czytaj
          </Button>
        </div>
      </StyledMetaWarpper>
    </StyledCardWrapper>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  goToArticle: PropTypes.func.isRequired
};
export default Card;
