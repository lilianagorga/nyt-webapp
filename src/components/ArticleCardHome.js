import React from 'react';
import '../assets/styles/home.css';

const ArticleCardHome = ({ article, position = "", sectionDisplay }) => {
  const { title, abstract, url } = article;

  const retrieveImage = (article) => {
    const { multimedia } = article;
    const imageObj =
      multimedia && multimedia.length > 0
        ? multimedia.find((item) => item.type === "image")
        : null;
        const imageUrl = imageObj && imageObj.url ? imageObj.url : "";
        return imageUrl;
  };

  const imgClassHome = `img-${position}-home`;
  const imageSrc = retrieveImage(article);

  return (
    <section>
      <a href={`/show/${encodeURIComponent(url)}`} className='article-link'>
        <article className="article">
          {imageSrc && position === 'main' && sectionDisplay === 'inner-picture' && (
            <div className='img-container-home'>
              <img src={imageSrc} alt={title} className={imgClassHome} />
            </div>
          )}

          {position === 'main' && sectionDisplay === 'inner-group' && <h3>{title}</h3>}
          {position === 'main' && sectionDisplay === 'inner-group' && <p>{abstract}</p>}
          
          {imageSrc && position === 'side' && sectionDisplay === 'inner-picture' && (
            <div className='img-container-home'>
              <img src={imageSrc} alt={title} className={imgClassHome} />
            </div>
          )}

          {position === 'side' && sectionDisplay === 'inner-group' && <h3>{title}</h3>}
          {position === 'side' && sectionDisplay === 'inner-group' && <p>{abstract}</p>}
        </article>
      </a>
    </section>
  );
};

export default ArticleCardHome;
