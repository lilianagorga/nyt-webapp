import React from 'react';
import '../styles/home.css';

const ArticleCardHome = ({ article, position = "", parentClass }) => {
  const { title, abstract, url } = article;
  console.log("article", article)
  // const imageObj = multimedia && multimedia.length > 0 ? multimedia.find((item) => item.type === 'image') : null;
  // const imageUrl = imageObj && imageObj.url ? imageObj.url : '';

  const retrieveImage = (article) => {
    const { multimedia } = article;
    const imageObj =
      multimedia && multimedia.length > 0
        ? multimedia.find((item) => item.type === "image")
        : null;
        const imageUrl = imageObj && imageObj.url ? imageObj.url : "";
        return imageUrl;
  };

  const createImgClassHome = () => {
    if (position === 'main') {
      return "img-main-home";
    } else if (position === 'side') {
      return 'img-side-home';
    }
  };

  const imgClassHome = createImgClassHome();
  const imageSrc = retrieveImage(article);

  return (
    <section>
      <a href={`/show/${encodeURIComponent(url)}`} className='article-link'>
        <article className="article">    
          {imageSrc && position === 'main' && parentClass === 'main-article-inner-picture' && (
              <img src={imageSrc} alt={title} className={imgClassHome} />
          )}

          {position === 'main' && parentClass === 'main-article-inner-group' && <h3>{title}</h3>}
          {position === 'main' && parentClass === 'main-article-inner-group' && <p>{abstract}</p>}
          
          {imageSrc && position === 'side' && parentClass === 'side-article-inner-picture' && (
              <img src={imageSrc} alt={title} className={imgClassHome} />
          )}

          {position === 'side' && parentClass === 'side-article-inner-group' && <h3>{title}</h3>}
          {position === 'side' && parentClass === 'side-article-inner-group' && <p>{abstract}</p>}
        </article>
      </a>
    </section>
  );
};

export default ArticleCardHome;
