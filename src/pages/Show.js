import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShowCard from '../components/ShowCard';
import RateLimit from '../components/RateLimit';
import Loader from '../components/Loader';

const Show = () => { 
  const [article, setArticle] = useState({});
  const [rateLimit, setRateLimit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { show } = useParams();
  const key = process.env.REACT_APP_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:"${show}"&api-key=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRateLimit(false);
        const data = response.data.response.docs;
        setArticle(data[0]);
        setIsLoading(false);
      } catch (error) {
        if (error.message === "Request failed with status code 429") {
          setRateLimit(true);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [show, key, url]);

  return (
    <div className='main-container'>
      {isLoading ? <Loader /> : (
        rateLimit ? <RateLimit /> : 
          <ShowCard article={article} />
      )}
    </div>
  );
};

export default Show;