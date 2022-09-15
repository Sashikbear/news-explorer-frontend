import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useState, useEffect, useCallback } from 'react';

function NewsCardList({
  cards,
  iconPhrase,
  isLocationMain,
  loggedIn,
  onSave,
  onDelete,
  onSignInClick,
  savedArticles,
  keyword,
}) {
  const [displaySets, setDisplaySets] = useState(0);
  const [displayCards, setDisplayCards] = useState([]);

  const handleShowMoreCards = () => {
    const nextThree = getDisplayCards(cards, displaySets + 1);
    setDisplayCards(nextThree);
    setDisplaySets(displaySets + 1);
  };

  const getDisplayCards = useCallback((cardArray, count = 1, size = 3) => {
    const lastIndex = count * size - 1;
    const cardsToDisplay = cardArray.slice(0, lastIndex + 1).map((card) => {
      return {
        ...card,
      };
    });
    return cardsToDisplay;
  }, []);

  useEffect(() => {
    setDisplaySets(0);
    setDisplayCards([]);
    if (cards?.length !== 0) {
      setDisplayCards(getDisplayCards(cards));
      setDisplaySets(1);
    }
  }, [cards, getDisplayCards]);
  return (
    <section className='news-card-list'>
      {isLocationMain && (
        <div className='news-card-list__title-wrapper'>
          <h2 className='news-card-list__title'>Search results </h2>
        </div>
      )}
      <div className='news-card-list__wrapper'>
        <ul className='news-card-list__grid'>
          {displayCards.map((card) => {
            card.keyword = keyword;
            return (
              <NewsCard
                key={card.publishedAt}
                card={card}
                iconPhrase={iconPhrase}
                isLocationMain={isLocationMain}
                loggedIn={loggedIn}
                onSave={onSave}
                onDelete={onDelete}
                onSignInClick={onSignInClick}
                savedArticles={savedArticles}
              />
            );
          })}
        </ul>
        {displayCards.length < cards.length && (
          <div className='news-card__button-wrapper'>
            <div className='news-card__button' onClick={handleShowMoreCards}>
              Show more
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
