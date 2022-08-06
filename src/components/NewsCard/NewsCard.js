import './NewsCard.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
const NewsCard = ({ card, iconPhrase, isLocationMain }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isloggedInandClicked, setIsLoggedInandClicked] = useState(false);
  function handleBookmarkClick() {
    if (currentUser.isLoggedIn) {
      setIsLoggedInandClicked(true);
    } else {
      setIsLoggedInandClicked(false);
    }
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
              }`}
              onClick={handleBookmarkClick}
            ></div>
          </div>
        </div>
      </div>
      <div className='news-card__info-wrapper'>
        <div className='news-card__info'>
          <h2 className='news-card__date'>{card.date}</h2>
          <h3 className='news-card__header'>{card.header}</h3>
          <blockquote className='news-card__text' cite={card.source}>
            {card.text}
          </blockquote>
        </div>
        <a className='news-card__link' href={card.link}>
          {card.source}
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
