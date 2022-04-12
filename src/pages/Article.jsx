import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useHttp } from '../hooks/useHttp2';
import MainTemplate from '../templates/MainTemplate';
import parse from 'html-react-parser';
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import Prism from 'prismjs';
import { Image, Transformation } from 'cloudinary-react';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
// import 'prismjs/plugins/show-language/prism-show-language.js';
// import 'prism/components/prism-sql.js';
// import 'prismjs/themes/prism-dark.css';
import dark from '../assets/styles/prism.css';
import Divider from '../components/atoms/Divider/Divider';
import Spinner from '../components/atoms/Spinner/Spinner';
import Title from '../components/atoms/Title/Title';

const StyledArticle = styled.article`
  width: 70%;
`;

const StyledArticleContent = styled.div`
  padding: 20px 10px;
`;
const Article = () => {
  const { isLoading, sendRequest } = useHttp();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    sendRequest({ url: `/article/${articleId}`, method: 'GET' }, setArticle);
  }, []);

  console.log(isLoading);
  useEffect(() => {
    Prism.highlightAll();
  }, [article, isLoading]);
  return (
    <MainTemplate>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{article ? article.title : 'Artukuł'}</title>
      </Helmet>
      {isLoading && <Spinner />}
      <CSSTransition
        in={!isLoading && Boolean(article)}
        unmountOnExit
        timeout={900}
        classNames="formik-error"
        nodeRef={nodeRef}
      >
        {article && (
          <StyledArticle className="line-numbers" ref={nodeRef}>
            <Title label={article.title} />

            <StyledArticleContent>
              <Image
                cloudName="di3vhekjd"
                publicId={`/Blog/${article.picture}`}
                className="float-image"
              >
                <Transformation width="300" height="200" gravity="south" crop="fill" />
              </Image>
              {parse(article.content)}
            </StyledArticleContent>
          </StyledArticle>
        )}
      </CSSTransition>
    </MainTemplate>
  );
};

export default Article;
