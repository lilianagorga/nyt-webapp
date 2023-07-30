import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchCard from '../components/SearchCard';
import { useParams } from 'react-router-dom';


const Search = () => {
  const [articles, setArticles] = useState([]);
  const { term } = useParams();
  const key = process.env.REACT_APP_NYT_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let apiUrl;
        if (term.trim() === 'home') {
          window.location.href = '/';
        } else {
          apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${key}`;
        }
        const res = await fetch(apiUrl);
        const data = await res.json();
        setArticles(data.response.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, [term, key]);



  return (
      <div>
        <Header />
        <SearchCard articles={articles} />
      </div>
  );
};

export default Search;