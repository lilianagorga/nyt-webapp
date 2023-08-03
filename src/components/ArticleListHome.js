import React from 'react';
import ArticleCardHome from './ArticleCardHome';
import '../assets/styles/home.css';

const ArticleListHome = ({ articles }) => {
  const sortedArticles = articles.reduce((acc, cur) => {
    if (!acc[cur.section]) {
      acc[cur.section] = [];
    }
    acc[cur.section].push(cur);
    return acc;
  }, {});

  const articleKeys = Object.keys(sortedArticles);
  const middleIndex = Math.ceil(articleKeys.length / 2);

  const mainArticleKeys = articleKeys.slice(0, middleIndex);
  const sideArticleKeys = articleKeys.slice(middleIndex);

  const mainArticles = {};

  mainArticleKeys.forEach((key) => {
    mainArticles[key] = sortedArticles[key];
  });

  const sideArticles = {};
  sideArticleKeys.forEach((key) => {
    sideArticles[key] = sortedArticles[key];
  });

  return (
    <div className="article-list-container">
      <div className="main-article-list">
        {Object.keys(mainArticles).map((section, index) => (
          <div className="main-article-group" key={index}>
            <div className="main-article-inner-group" key={index}>
              {mainArticles[section].slice(0, 2).map((article, index) => (
                <ArticleCardHome article={article} key={index} position="main" sectionDisplay="inner-group"/>
              ))}
            </div>
            <div className='main-article-inner-picture'>
              {mainArticles[section][0] && (
                <ArticleCardHome article={mainArticles[section][0]} key={index} position="main" sectionDisplay="inner-picture"/>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="side-article-list">
        {Object.keys(sideArticles).map((section, index) => (
          <div className="side-article-card" key={index}>
            <div className="side-article-inner-group" key={index}>
              {sideArticles[section].slice(0, 1).map((article, index) => (
                <ArticleCardHome article={article} key={index} position="side" sectionDisplay="inner-group"/>
              ))}
            </div>
            <div className='side-article-inner-picture'>
              {sideArticles[section][0] && (
                <ArticleCardHome article={sideArticles[section][0]} key={index} position="side" sectionDisplay="inner-picture"/>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleListHome;
