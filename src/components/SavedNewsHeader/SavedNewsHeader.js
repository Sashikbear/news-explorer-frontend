import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

const SavedNewsHeader = ({ savedArticles, currentName }) => {
  const currentUser = useContext(CurrentUserContext);
  const keywordArray = savedArticles.map((article) => article.keyword);
  let modeMap = {};

  for (let el of keywordArray) {
    if (!modeMap[el]) {
      modeMap[el] = 0;
      modeMap[el]++;
    }
  }
  const modeMapToKeywordArray = Object.entries(modeMap);
  const sortedArray = modeMapToKeywordArray.sort((a, b) => b[1] - a[1]);
  const sortedElements = sortedArray.map((el) => `${el[0]}`);
  const commaSeparatedElements = sortedElements.join(',');
  const twoWords = sortedElements.slice(0, 2).join(', ');

  return (
    <header className='saved-news__header'>
      <h1 className='saved-news__articles-header'>Saved articles</h1>
      <h2 className='saved-news__message'>
        {currentName}, you have {savedArticles.length} saved articles
      </h2>
      <div className='saved-news__keywords-wrapper'>
        <p className='saved-news__keywords'>
          By keywords:&nbsp;
          {sortedElements.length === 3 || sortedElements.length < 3 ? (
            <b>{commaSeparatedElements}</b>
          ) : (
            <b>
              {twoWords} and {sortedElements.length - 2} other
            </b>
          )}
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
