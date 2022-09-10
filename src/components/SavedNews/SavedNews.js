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
  currentName,
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
        currentName={currentName}
      />
      <section className='saved-news'>
        <SavedNewsHeader
          savedArticles={savedArticles}
          currentName={currentName}
        />
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
