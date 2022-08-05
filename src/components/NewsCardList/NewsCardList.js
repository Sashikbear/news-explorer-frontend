import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

function NewsCardList({ cards, isFullCardList, iconPhrase, isLocationMain }) {
  const slicedCards = cards.slice(0, 3);
  const remainedCards = cards.slice(2, cards.length - 1);
  const [isShowMore, setIsShowMore] = useState(false);
  function handleShowMoreClick() {
    setIsShowMore(true);
  }
  function handleShowLessClick() {
    setIsShowMore(false);
  }

  return (
    <section className='news-card-list'>
      {isLocationMain && (
        <div className='news-card-list__title-wrapper'>
          <h2 className='news-card-list__title'>Search results </h2>
        </div>
      )}
      {isFullCardList && (
        <ul className='news-card-list__grid'>
          {cards.map((card) => (
            <NewsCard
              key={card._id}
              card={card}
              iconPhrase={iconPhrase}
              isLocationMain={isLocationMain}
            />
          ))}
        </ul>
      )}

      {!isFullCardList && (
        <div className='news-card-list__wrapper'>
          <ul className='news-card-list__grid'>
            {slicedCards.map((card) => (
              <NewsCard
                key={card._id}
                card={card}
                iconPhrase={iconPhrase}
                isLocationMain={isLocationMain}
              />
            ))}
          </ul>
          {!isShowMore && (
            <div className='news-card__button-wrapper'>
              <div className='news-card__button' onClick={handleShowMoreClick}>
                Show more
              </div>
            </div>
          )}
          {isShowMore && (
            <>
              {' '}
              <ul className='news-card-list__grid'>
                {remainedCards.map((card) => (
                  <NewsCard
                    key={card._id}
                    card={card}
                    isLocationMain={isLocationMain}
                    iconPhrase={iconPhrase}
                  />
                ))}
              </ul>
              <div className='news-card__button-wrapper'>
                <div
                  className='news-card__button'
                  onClick={handleShowLessClick}
                >
                  Show less
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default NewsCardList;
