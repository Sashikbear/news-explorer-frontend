import { cards } from '../../utils/constants';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ cards }) => {
  return (
    <section className='saved-news__header'>
      <span className='saved-news__articles-header'>Saved articles</span>
      <h2 className='saved-news__message'>
        Elise, you have {cards.length} saved articles
      </h2>
      <div className='saved-news__keywords-wrapper'>
        <span className='saved-news__keywords'>By keywords:&nbsp;</span>
        <span className='saved-news__keywords saved-news__keywords_bold'>
          {cards[0].keyword}, {cards[2].keyword}, and {cards.length - 3} others
        </span>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
