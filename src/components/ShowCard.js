import React from 'react';
import '../styles/show.css';

const ShowCard = ({ article }) => {

  const {abstract, headline, byline, _id, multimedia, lead_paragraph} = article;
  const main = headline?.main || '';
  const originalByline = byline?.original || '';
  const imageObj = multimedia && multimedia.length > 0 ? multimedia.find((item) => item.type === 'image') : null;
  const baseUrl = 'https://www.nytimes.com/';
  const imageUrl = imageObj && imageObj.url ? `${baseUrl}${imageObj.url}` : null;

  return (
    <section>
        <article key={_id} className='show-article'>
          <img src={imageUrl} alt={main} />
          <div className='article-content'>
            <h2 className='show-main'>{main}</h2>
            <p className='show-abstrat'>{abstract}</p>
            <p className='show-lead-paragraph'>{lead_paragraph}</p>
            <p className='show-byline'><span>{originalByline}</span></p>
          </div>
        </article>
    </section>       
  );
};

export default ShowCard;
