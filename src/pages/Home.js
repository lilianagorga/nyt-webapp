import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleListHome from '../components/ArticleListHome';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const key = process.env.REACT_APP_NYT_API_KEY;
  console.log('key', key)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
        );
        const data = response.data.results;
        setArticles(data);
      } catch (error) {
        console.error('Errore nel caricamento delle storie:', error);
      }
    };

    fetchData();
  }, [key]);

  return (
    <div className="main-container">
      <ArticleListHome articles={articles} page="home" />
    </div>
  );
};

export default Home;