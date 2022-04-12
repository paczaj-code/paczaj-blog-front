import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalTemplate from './templates/GlobalTemplate';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Glossary from './pages/Glossary';
import NotFound from './pages/NotFound';
import Categories from './pages/admin/Categories';
import CategoryForm from './pages/admin/Forms/CategoryForm';
import Articles from './pages/admin/Articles';
import ArticleForm from './pages/admin/Forms/ArticleForm';
import './App.css';
import Article from './pages/Article';

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <GlobalTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="category/:category/:subCategory" element={<Category />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/category/:category/:subCategory/:articleId" element={<Article />} />
        <Route path="/administration/categories" element={<Categories />} />
        <Route path="/administration/category-form/:categoryId" element={<CategoryForm />} />
        <Route path="/administration/articles" element={<Articles />} />
        <Route path="/administration/article-form/:articleId" element={<ArticleForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalTemplate>
  );
};

export default App;
