import './NewsCard.css';
import { useState } from 'react';
import { dateConverter } from '../../utils/dateConverter';
const NewsCard = ({
  card,
  iconPhrase,
  isLocationMain,
  loggedIn,
  onSave,
  onDelete,
  onSignInClick,
  savedArticles,
}) => {
  const [isloggedInandClicked, setIsLoggedInandClicked] = useState(false);
  const isSaved = savedArticles.some(
    (savedArticle) => savedArticle.url === card.url
  );
  const handleBookmarkClick = () => {
    if (loggedIn) {
      setIsLoggedInandClicked(true);
      if (!isLocationMain) {
        onDelete(card._id);
      } else {
        onSave(card);
        console.log(card);
      }
      if (isSaved) {
        setIsLoggedInandClicked(false);
      }
    } else {
      onSignInClick();
      setIsLoggedInandClicked(false);
    }
  };

  return (
    <li key={card.publishedAt} className='news-card'>
      <div className='news-card__image-container'>
        <div
          className='news-card__image'
          style={{ backgroundImage: `url(${card.urlToImage})` }}
        ></div>
        {!isLocationMain && (
          <div className='news-card__keyword'>{card.keyword}</div>
        )}
        <div className='news-card__icon-wrapper'>
          {!loggedIn && isLocationMain && (
            <div className='news-card__icon-popup'>{iconPhrase}</div>
          )}
          {!isLocationMain && (
            <div className='news-card__icon-popup'>{iconPhrase}</div>
          )}
          <div className='news-card__icon-container'>
            <div
              className={`news-card__icon ${
                isLocationMain
                  ? 'news-card__icon_type_bookmark'
                  : 'news-card__icon_type_trashbin'
              } ${
                isloggedInandClicked && isLocationMain
                  ? 'news-card__icon_color_blue'
                  : ''
              } ${
                isSaved && isLocationMain ? 'news-card__icon_color_blue' : ''
              }`}
              onClick={handleBookmarkClick}
            ></div>
          </div>
        </div>
      </div>
      <div className='news-card__info-wrapper'>
        <div className='news-card__info'>
          <h2 className='news-card__date'>{dateConverter(card.publishedAt)}</h2>
          <h3 className='news-card__header'>{card.title}</h3>
          <blockquote className='news-card__text' cite={card.author}>
            {card.content}
          </blockquote>
        </div>
        <a className='news-card__link' href={card.url}>
          {card.source.name}
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
