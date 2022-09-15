import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import PopupConfirm from '../PopupConfirm/PopupConfirm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { newsApi } from '../../utils/NewsApi';
import {
  register,
  login,
  checkToken,
  getUserData,
  saveArticle,
  deleteArticle,
  getSavedArticles,
} from '../../utils/MainApi';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [keyword, setKeyword] = useState(localStorage.getItem('keyword'));
  const [savedArticles, setSavedArticles] = useState([]);

  const [isSearching, setIsSearching] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem('searchResults'))
  );

  const navigate = useNavigate();

  function handleSignInClick() {
    setSignUpPopupOpen(false);
    setConfirmPopupOpen(false);
    setSignInPopupOpen(true);
  }
  function handleSignUpClick() {
    setSignInPopupOpen(false);
    setSignUpPopupOpen(true);
  }
  function closeAllPopups() {
    setSignInPopupOpen(false);
    setSignUpPopupOpen(false);
    setConfirmPopupOpen(false);
  }
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      checkToken(token)
        .then((res) => {
          console.log('Username set, ', res.name);
          setCurrentUser(res.name);
          console.log(currentUser);
          setLoggedIn(true);
        })
        .catch((err) => console.log(`Error: ${err}`));
    }
  }, []);

  useEffect(() => {
    loggedIn &&
      getUserData()
        .then((res) => setCurrentUser(res.name))
        .catch((err) => console.log(`Error: ${err}`));
  }, [loggedIn]);

  function handleSearchSubmit(search) {
    setIsSearching(true);
    newsApi
      .getNews(search)
      .then((cards) => {
        if (!cards.articles || cards.articles.length === 0) {
          setIsNotFound(true);
          setIsSearched(false);
          setIsSearching(false);
        } else {
          setCards(cards.articles);
          localStorage.setItem('searchResults', JSON.stringify(cards.articles));
          setKeyword(search);
          localStorage.setItem('keyword', search);
          setIsSearched(true);
          setIsSearching(false);
          setIsNotFound(false);
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  const getArticles = useCallback(() => {
    loggedIn &&
      getSavedArticles()
        .then((articlesList) => {
          setSavedArticles(
            articlesList.map((article) => {
              return {
                _id: article._id,
                keyword: article.keyword,
                title: article.title,
                content: article.text,
                publishedAt: article.date,
                source: { name: article.source },
                url: article.link,
                urlToImage: article.image,
                owner: article.owner,
              };
            })
          );
        })
        .catch((err) => console.log(`Error: ${err}`));
  }, [loggedIn]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const handleSaveArticle = (article) => {
    const isSavedAlready = savedArticles.find(
      (savedArticle) => savedArticle.url === article.url
    );
    if (isSavedAlready) {
      deleteArticle(isSavedAlready._id)
        .then(() => getArticles())
        .catch((err) => console.log(`Error${err}`));
    } else {
      saveArticle({
        keyword: article.keyword,
        title: article.title,
        text: article.content,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      })
        .then(() => getArticles())
        .catch((err) => console.log(`Error${err}`));
    }
  };

  const handleDeleteArticle = (articleId) => {
    deleteArticle(articleId)
      .then(() => {
        setSavedArticles((articles) =>
          articles.filter((article) => article._id !== articleId)
        );
      })
      .catch((err) => console.log(`Error${err}`));
  };

  const handleSignUpSubmit = (email, password, username) => {
    if (!email || !password || !username) {
      throw new Error('Something went wrong with the email or password! ');
    }
    register(email, password, username)
      .then(() => {
        closeAllPopups();
        setConfirmPopupOpen(true);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };
  const handleSignInSubmit = (email, password) => {
    if (!email || !password) {
      throw new Error('Something went wrong with the email or password! ');
    }
    login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          closeAllPopups();
          return data;
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  function handleSignOutSubmit() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser('');
    navigate('/', { replace: true });
  }
  useEffect(() => {
    const handleClickClose = (e) => {
      if (e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    };

    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen) {
      document.addEventListener('mousedown', handleClickClose);
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickClose);
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isSignInPopupOpen, isSignUpPopupOpen]);
  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                loggedIn={loggedIn}
                onSignInClick={handleSignInClick}
                onClose={closeAllPopups}
                onSignOut={handleSignOutSubmit}
                onSave={handleSaveArticle}
                savedArticles={savedArticles}
                isSearched={isSearched}
                isSearching={isSearching}
                isNotFound={isNotFound}
                cards={cards}
                onSearch={handleSearchSubmit}
                keyword={keyword}
              />
            }
          />
          <Route
            path='saved-news'
            element={
              <ProtectedRoute redirectPath='/' loggedIn={loggedIn}>
                <SavedNews
                  loggedIn={loggedIn}
                  onSignOut={handleSignOutSubmit}
                  savedArticles={savedArticles}
                  onDelete={handleDeleteArticle}
                  onSave={handleSaveArticle}
                  onSignInClick={handleSignInClick}
                />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <SignInPopup
          isOpen={isSignInPopupOpen}
          onSignUpClick={handleSignUpClick}
          onClose={closeAllPopups}
          alternative='Sign up'
          submitButton='Sign in'
          onSignInSubmit={handleSignInSubmit}
        />
        <SignUpPopup
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          alternative='Sign in'
          submitButton='Sign up'
          onSignInClick={handleSignInClick}
          onSignUpSubmit={handleSignUpSubmit}
        />
        <PopupConfirm
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          title='Registration successfully completed!'
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
