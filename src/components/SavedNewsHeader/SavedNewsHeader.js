import './SavedNewsHeader.css';

const SavedNewsHeader = ({ cards }) => {
  return (
    <header className='saved-news__header'>
      <h1 className='saved-news__articles-header'>Saved articles</h1>
      <h2 className='saved-news__message'>
        Elise, you have {cards.length} saved articles
      </h2>
      <div className='saved-news__keywords-wrapper'>
        <p className='saved-news__keywords'>
          By keywords:&nbsp;
          <b>
            {cards[0].keyword}, {cards[2].keyword}, and {cards.length - 3}{' '}
            others
          </b>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
