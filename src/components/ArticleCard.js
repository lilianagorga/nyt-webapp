import React from 'react';
import '../styles/section.css'

const ArticleCard = ({ article, showAbstrat = true, showOriginal = true, position = "" }) => {
  const { abstract, headline, byline, _id, multimedia, web_url } = article;
  const main = headline?.main || '';
  const originalByline = byline?.original || '';
  const imageObj = multimedia && multimedia.length > 0 ? multimedia.find((item) => item.type === 'image') : null;
  const baseUrl = 'https://www.nytimes.com/';
  const imageUrl = imageObj && imageObj.url ? `${baseUrl}${imageObj.url}` : null;
  
  const createImgClass = () => {
    if(position === 'top-main') {
      return "img-top"
    } else if (position === 'top-side') {
      return 'img-side'
    } else if (position === 'bottom') {
      return 'img-bottom';
    }
  }

  const imgClass = createImgClass();

  return (
    <section>
      <a href={web_url} target="_blank" rel="noreferrer">
        <article key={_id} className="article">
          {position === "top-main" && imageUrl && (<img src={imageUrl} alt={main} className={imgClass} />)}
          {position === "top-main" && <h3>{main}</h3>}
          {position === "top-main" && showAbstrat && <p>{abstract}</p>}
          {position === "top-main" && showOriginal && <p><span>{originalByline}</span></p>}
          
          {position === "top-side" && (
            <div className="top-side-article">
              <div className='side-article-content'>
                <h3>{main}</h3>
                {showAbstrat && <p>{abstract}</p>}
                {showOriginal && <p><span>{originalByline}</span></p>}
              </div>
              {imageUrl && (<img src={imageUrl} alt={main} className={imgClass} />)}
            </div>
          )}
          
          {position === "bottom" && imageUrl && (<img src={imageUrl} alt={main} className={imgClass} />)}
          {position === "bottom" && <p>{main}</p>}     
        </article>
      </a>
    </section>
  );
};

export default ArticleCard;
