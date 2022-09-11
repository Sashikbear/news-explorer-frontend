import './SavedNews.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({
  onSignOut,
  savedArticles,
  onDelete,
  loggedIn,
  onSave,
  onSignInClick,
}) {
  const isLocationMain = false;

  return (
    <section className='saved-news__wrapper'>
      <Navigation
        islocationMain={isLocationMain}
        onSignOut={onSignOut}
        loggedIn={loggedIn}
      />
      <section className='saved-news'>
        <SavedNewsHeader savedArticles={savedArticles} />
      </section>
      <section className='saved-news__articles'>
        <ul className='saved-news__grid'>
          {savedArticles.map((article) => {
            return (
              <NewsCard
                card={article}
                key={article._id}
                onDelete={onDelete}
                isLocationMain={isLocationMain}
                iconPhrase={'Remove from saved'}
                loggedIn={loggedIn}
                onSave={onSave}
                onSignInClick={onSignInClick}
                savedArticles={savedArticles}
              />
            );
          })}
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default SavedNews;
