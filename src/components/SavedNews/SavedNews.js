import './SavedNews.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cards } from '../../utils/constants';

function SavedNews({ isFullCardList, onViewSearched, onSignOut }) {
  const [isLocationMain, setIsLocationMain] = useState(false);
  useEffect(() => {
    onViewSearched();
  }, []);

  return (
    <main className='saved-news__wrapper'>
      <Navigation islocationMain={isLocationMain} onSignOut={onSignOut} />
      <section className='saved-news'>
        <SavedNewsHeader cards={cards} />
      </section>
      <section className='saved-news__articles'>
        <NewsCardList
          cards={cards}
          isFullCardList={isFullCardList}
          iconPhrase='Remove from saved'
          islocationMain={isLocationMain}
        />
      </section>
      <Footer />
    </main>
  );
}

export default SavedNews;
