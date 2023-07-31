import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useParams, useNavigate } from 'react-router-dom';


const Search = () => {
  const { term } = useParams();
  const key = process.env.REACT_APP_NYT_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let apiUrl;
        if (term.trim() === 'home') {
          navigate('/');
        } else {
          apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${key}`;
        }
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data.response.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, [term, key, navigate]);



  return (
      <div>
        <Header />
      </div>
  );
};

export default Search;