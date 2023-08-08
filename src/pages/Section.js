import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import RateLimit from '../components/RateLimit';
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";

const Section = () => {
  const [articles, setArticles] = useState([]);
  const [rateLimit, setRateLimit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
      } catch (error) {
        if (error.message === "Request failed with status code 429") {
          setRateLimit(true);
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [section, key, url]);

  return (
    <div className="main-container">
      {isLoading ? <Loader /> : (
        rateLimit ? <RateLimit /> : 
          <ArticleList articles={articles} page="section"/>
      )}
    </div>
  );
};

export default Section;