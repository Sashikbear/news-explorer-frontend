import './Main.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
function Main({
  onSignInClick,
  onSignUpClick,
  onSignOut,
  loggedIn,
  currentName,
  savedArticles,
  onSave,
  isSearching,
  isSearched,
  isNotFound,
  cards,
  onSearch,
  keyword,
}) {
  const isLocationMain = true;

  return (
    <>
      <div className='main-wrapper'>
        <Navigation
          islocationMain={isLocationMain}
          onSignInClick={onSignInClick}
          onSignUpClick={onSignUpClick}
          onSignOut={onSignOut}
          loggedIn={loggedIn}
          currentName={currentName}
        />
        <section className='main'>
          <Header />
          <SearchForm onSearchSubmit={onSearch} />
        </section>
      </div>
      {isSearching && <Preloader />}
      {isNotFound && <NotFound />}
      {isSearched && (
        <section className='news'>
          <section className='news__articles'>
            <NewsCardList
              loggedIn={loggedIn}
              cards={cards}
              iconPhrase='Sign in to save articles'
              isLocationMain={isLocationMain}
              onSave={onSave}
              onSignInClick={onSignInClick}
              savedArticles={savedArticles}
              keyword={keyword}
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
