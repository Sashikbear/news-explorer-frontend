import './SavedNews.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cards } from '../../utils/constants';

function SavedNews({ isFullCardList, onViewSearched, onSignOut }) {
  const isLocationMain = false;
  useEffect(() => {
    onViewSearched();
    // eslint-disable-next-line
  }, []);

  return (
    <section className='saved-news__wrapper'>
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
    </section>
  );
}

export default SavedNews;
