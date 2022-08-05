import './Main.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cards } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
function Main({
  onSignInClick,
  onSignUpClick,
  isFullCardList,
  onViewSearched,
  onSignOut,
}) {
  const [isLocationMain, setIsLocationMain] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  function handleSearchSubmit() {
    setIsSearching(true);
    new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then((cards) => {
      if (!cards || cards.length === 0) {
        setIsNotFound(true);
        setIsSearched(false);
      }
      onViewSearched();
      setIsSearched(true);
      setIsSearching(false);
      setIsNotFound(false);
    });
  }

  return (
    <>
      <div className='main-wrapper'>
        <Navigation
          islocationMain={isLocationMain}
          onSignInClick={onSignInClick}
          onSignUpClick={onSignUpClick}
          onSignOut={onSignOut}
        />
        <main className='main'>
          <Header />
          <SearchForm onSearchSubmit={handleSearchSubmit} />
        </main>
      </div>
      {isSearching && <Preloader />}
      {isNotFound && <NotFound />}
      {isSearched && (
        <section className='news'>
          <section className='news__articles'>
            <NewsCardList
              cards={cards}
              isFullCardList={isFullCardList}
              iconPhrase='Sign in to save articles'
              isLocationMain={isLocationMain}
            />
          </section>
        </section>
      )}
      <About />
      <Footer />
    </>
  );
}

export default Main;
