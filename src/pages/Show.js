import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShowCard from '../components/ShowCard';



const Show = () => { 
  const [article, setArticle] = useState({});
  const [rateLimit, setRateLimit] = useState(false);
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
      } catch (error) {
        if (error.message === "Request failed with status code 429") {
          setRateLimit(true);
        }
      }
    };
    fetchData();
  }, [show, key, url]);

  return (
    <div className='main-container'>
      {rateLimit ? <div>We have hit the NYT API Rate limit. Please wait 1 minute...</div> : <ShowCard article={article} />}
    </div>
  );
};

export default Show;
