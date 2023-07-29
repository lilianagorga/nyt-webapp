import React from "react";

const SearchCard = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => {
      const {abstract, headline, byline, lead_paragraph, _id} = article;
      const main = headline?.main || '';
      const originalByline = byline?.original || '';

      return (
        <article key={_id}>
          <h2>{main}</h2>
          <p>{abstract}</p>
          <p>{lead_paragraph}</p>
          <ul>
            <li>{originalByline}</li>
          </ul>
        </article>
        )
      })}
    </div>
  );
};

export default SearchCard;