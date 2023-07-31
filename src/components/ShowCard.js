import React from 'react';

const ShowCard = ({ article, showAbstrat = true, showOriginal = true }) => {

  const {abstract, headline, byline, _id, multimedia} = article;
  const main = headline?.main || '';
  const originalByline = byline?.original || '';
  const imageObj = multimedia && multimedia.length > 0 ? multimedia.find((item) => item.type === 'image') : null;
  const baseUrl = 'https://www.nytimes.com/';
  const imageUrl = imageObj && imageObj.url ? `${baseUrl}${imageObj.url}` : null;

  return (
    <section>
        <article key={_id} className='article'>
          <h2>{main}</h2>
          {showAbstrat && <p>{abstract}</p>}
          {showOriginal && <p><span>{originalByline}</span></p>}
          <img src={imageUrl} alt={main} />
        </article>
    </section>       
  );
};

export default ShowCard;
