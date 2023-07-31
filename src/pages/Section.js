import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import { useParams } from 'react-router-dom';

const Section = () => {
  const [articles, setArticles] = useState([]);
  const [rateLimit, setRateLimit] = useState(false);
  const { section } = useParams();
  const key = process.env.REACT_APP_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRateLimit(false);
        const data = response.data.response.docs;
        setArticles(data);
      } catch (error) {
        if (error.message === "Request failed with status code 429") {
          setRateLimit(true);
        }
      }
    };

    fetchData();
  }, [section, key, url]);

  return (
    <div className="main-container">
     {rateLimit ? <div>We have hit the NYT API Rate limit. Please wait 1 minute...</div> : <ArticleList articles={articles} page="section"/>}
    </div>
  );
};

export default Section;