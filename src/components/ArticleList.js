import React from 'react';
import ArticleCard from './ArticleCard';
import '../assets/styles/section.css';

const ArticleList = ({ articles }) => {

  return (
    <div className="article-list-section-container">
      <div className="section-top-page">
        <div className="main-article-section">
          {articles.slice(0, 2).map((article, index) => (
            <div className="main-article-section-group" key={index}>
              <div className="main-article-section-inner-group" key={index}>
                <ArticleCard article={article} key={index} position="top-main"/>
              </div>
            </div>
          ))}
        </div>
        <div className="side-article-section">
          {articles.slice(2, 4).map((article, index) => (
            <div className="side-article-section-card" key={index}>
              <div className="side-article-section-inner-group" key={index}>
                <ArticleCard article={article} key={index} position="top-side"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-bottom-page">
        <div className="bottom-article-section">
          {articles.slice(4, 9).map((article, index) => (
            <div className="bottom-article-card" key={index}>
              <div className="bottom-article-inner-group" key={index}>
                <ArticleCard article={article} key={index} position= "bottom"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
