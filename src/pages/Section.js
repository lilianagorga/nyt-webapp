import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import { useParams } from 'react-router-dom';

const Section = () => {
  const [articles, setArticles] = useState([]);
  const { section } = useParams();
  const key = process.env.REACT_APP_NYT_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=${key}`
        );
        const data = response.data.response.docs;
        setArticles(data);
      } catch (error) {
        console.error('Errore nel caricamento delle storie:', error);
      }
    };

    fetchData();
  }, [section, key]);

  return (
    <div className="main-container">
      <ArticleList articles={articles} page="section" />
    </div>
  );
};

export default Section;