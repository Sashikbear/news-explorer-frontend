import './NewsCard.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
const NewsCard = ({ card, iconPhrase, isLocationMain }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const [isloggedInandClicked, setIsLoggedInandClicked] = useState(false);
  function handleBookmarkClick() {
    if (currentUser.isLoggedIn) {
      setIsLoggedInandClicked(true);
    } else {
      setIsBookmarkClicked(true);
      setIsLoggedInandClicked(false);
    }
  }
  function handleBookmarkPopupClick() {
    setIsBookmarkClicked(false);
  }
  return (
    <li key={card._id} className='news-card'>
      <div className='news-card__image-container'>
        <div
          className='news-card__image'
          style={{ backgroundImage: `url(${card.src})` }}
        ></div>
        {!isLocationMain && (
          <div className='news-card__keyword'>{card.keyword}</div>
        )}
        <div className='news-card__icon-wrapper'>
          {!currentUser.isLoggedIn && isLocationMain && (
            <div
              className='news-card__icon-popup'
              onClick={handleBookmarkPopupClick}
            >
              {iconPhrase}
            </div>
          )}
          {!isLocationMain && (
            <div
              className='news-card__icon-popup'
              onClick={handleBookmarkPopupClick}
            >
              {iconPhrase}
            </div>
          )}
          <div
            className={`news-card__icon ${
              isLocationMain
                ? 'news-card__icon_type_bookmark'
                : 'news-card__icon_type_trashbin'
            } ${
              isloggedInandClicked && isLocationMain
                ? 'news-card__icon_color_blue'
                : ''
            }`}
            onClick={handleBookmarkClick}
          ></div>
        </div>
      </div>
      <div className='news-card__info'>
        <span className='news-card__date'>{card.date}</span>
        <h3 className='news-card__header'>{card.header}</h3>
        <blockquote className='news-card__text' cite={card.source}>
          {card.text}
        </blockquote>
      </div>
      <a className='news-card__link' href={card.link}>
        {card.source}
      </a>
    </li>
  );
};

export default NewsCard;
