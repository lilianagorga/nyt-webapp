import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleListHome from '../components/ArticleListHome';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [rateLimit, setRateLimit] = useState(false);
  const key = process.env.REACT_APP_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRateLimit(false);
        const data = response.data.results;
        setArticles(data);
      } catch (error) {
        if (error.message === "Request failed with status code 429") {
          setRateLimit(true);
        }
      }
    };

    fetchData();
  }, [key, url]);

  return (
    <div className="main-container">
     {rateLimit ? <div>We have hit the NYT API Rate limit. Please wait 1 minute...</div> : <ArticleListHome articles={articles} page="home"/>}
    </div>
  );
};

export default Home;