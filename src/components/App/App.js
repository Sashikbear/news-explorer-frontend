import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import PopupConfirm from '../PopupConfirm/PopupConfirm';
import { useNavigate } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    isLoggedIn: false,
  });
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isFullCardList, setIFullCardList] = useState();
  const navigate = useNavigate();
  function handleFullCardList() {
    setIFullCardList(true);
  }
  function handleHalfCardList() {
    setIFullCardList(false);
  }

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
  function handelSignUpSubmit(username) {
    setCurrentUser({ username: username, isLoggedIn: false });
    setSignUpPopupOpen(false);
    setConfirmPopupOpen(true);
  }
  function handelSignInSubmit(username) {
    setCurrentUser({ username: username, isLoggedIn: true });
    setSignInPopupOpen(false);
  }
  function handelSignOutSubmit() {
    setCurrentUser({ username: '', isLoggedIn: false });
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
                onSignInClick={handleSignInClick}
                onClose={closeAllPopups}
                isFullCardList={isFullCardList}
                onViewSearched={handleHalfCardList}
                onSignOut={handelSignOutSubmit}
              />
            }
          />
          <Route
            path='saved-news'
            element={
              <SavedNews
                isFullCardList={isFullCardList}
                onViewSearched={handleFullCardList}
                onSignOut={handelSignOutSubmit}
              />
            }
          />
        </Routes>
        <SignInPopup
          isOpen={isSignInPopupOpen}
          onSignUpClick={handleSignUpClick}
          onClose={closeAllPopups}
          alternative='Sign up'
          submitButton='Sign in'
          onSignInSubmit={handelSignInSubmit}
        />
        <SignUpPopup
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          alternative='Sign in'
          submitButton='Sign up'
          onSignInClick={handleSignInClick}
          onSignUpSubmit={handelSignUpSubmit}
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
