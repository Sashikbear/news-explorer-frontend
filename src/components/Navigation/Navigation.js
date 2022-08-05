import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function Navigation({ islocationMain, onSignInClick, onSignOut, username }) {
  const currentUser = useContext(CurrentUserContext);
  const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false);
  function handleHamburgerMenuClick() {
    if (isHamburgerMenuClicked) {
      setIsHamburgerMenuClicked(false);
    } else {
      setIsHamburgerMenuClicked(true);
    }
  }
  return (
    <>
      <nav className='navbar'>
        {isHamburgerMenuClicked && islocationMain && (
          <div className='navbar__overlay'></div>
        )}
        <div className='navbar__wrapper'>
          <div
            className={`navbar__logo  ${
              islocationMain ? '' : 'navbar__logo_color_black'
            }`}
          >
            NewsExplorer
          </div>
          <ul className='navbar__links'>
            <li
              className={`navbar__link  ${
                islocationMain ? '' : 'navbar__link_color_black'
              }`}
            >
              {islocationMain && (
                <Link
                  to={'/'}
                  style={{ textDecoration: 'inherit', color: 'white' }}
                >
                  {'Home'}
                </Link>
              )}
              {!islocationMain && (
                <Link
                  to={'/'}
                  style={{ textDecoration: 'inherit', color: '#1A1B22' }}
                >
                  {'Home'}
                </Link>
              )}
            </li>
            {!currentUser.isLoggedIn && (
              <>
                {' '}
                <li
                  className={`navbar__link  ${
                    islocationMain ? '' : 'navbar__link_color_black'
                  }`}
                >
                  <div className='navbar__button' onClick={onSignInClick}>
                    Sign in
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleHamburgerMenuClick}
                    className={`navbar__hamburger  ${
                      islocationMain
                        ? 'navbar__hamburger_color_white'
                        : 'navbar__hamburger_color_black'
                    } ${
                      isHamburgerMenuClicked
                        ? 'navbar__hamburger_color_white-close'
                        : ''
                    } ${
                      isHamburgerMenuClicked &&
                      !islocationMain &&
                      'navbar__hamburger_color_black-close'
                    }`}
                  ></div>
                </li>
              </>
            )}

            {currentUser.isLoggedIn && (
              <>
                <li
                  className={`navbar__link  ${
                    islocationMain ? '' : 'navbar__link_color_black'
                  }`}
                >
                  {islocationMain && (
                    <Link
                      to={'/saved-news'}
                      style={{ textDecoration: 'inherit', color: 'white' }}
                    >
                      {'Saved articles'}
                    </Link>
                  )}
                  {!islocationMain && (
                    <Link
                      to={'/saved-news'}
                      style={{ textDecoration: 'inherit', color: 'black' }}
                    >
                      {'Saved articles'}
                    </Link>
                  )}
                </li>
                <li
                  className={`navbar__link  ${
                    islocationMain ? '' : 'navbar__link_color_black'
                  }`}
                >
                  <div
                    className={`navbar__button_signedin  ${
                      islocationMain
                        ? 'navbar__button_signedin-white'
                        : 'navbar__button_color_black'
                    }`}
                  >
                    <span>{username || 'Alex'}</span>
                    <div
                      onClick={onSignOut}
                      className={`navbar__icon ${
                        islocationMain
                          ? 'navbar__icon_color_white'
                          : 'navbar__icon_color_black'
                      }`}
                    ></div>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleHamburgerMenuClick}
                    className={`navbar__hamburger  ${
                      islocationMain
                        ? 'navbar__hamburger_color_white'
                        : 'navbar__hamburger_color_black'
                    } ${
                      isHamburgerMenuClicked
                        ? 'navbar__hamburger_color_white-close'
                        : ''
                    } ${
                      isHamburgerMenuClicked &&
                      !islocationMain &&
                      'navbar__hamburger_color_black-close'
                    }`}
                  ></div>
                </li>
              </>
            )}
          </ul>
        </div>
        {isHamburgerMenuClicked && (
          <ul className='navbar__links '>
            <li
              className={`navbar__link-hamburger  ${
                islocationMain ? '' : 'navbar__link-hamburger_color_black'
              }`}
            >
              {islocationMain && (
                <Link
                  to={'/'}
                  style={{ textDecoration: 'inherit', color: 'white' }}
                >
                  {'Home'}
                </Link>
              )}
              {!islocationMain && (
                <Link
                  to={'/'}
                  style={{ textDecoration: 'inherit', color: '#1A1B22' }}
                >
                  {'Home'}
                </Link>
              )}
            </li>
            {!currentUser.isLoggedIn && (
              <>
                {' '}
                <li
                  className={`navbar__link-hamburger  ${
                    islocationMain ? '' : 'navbar__link-hamburger_color_black'
                  }`}
                >
                  <div className='navbar__button' onClick={onSignInClick}>
                    Sign in
                  </div>
                </li>
              </>
            )}

            {currentUser.isLoggedIn && (
              <>
                <li
                  className={`navbar__link-hamburger  ${
                    islocationMain ? '' : 'navbar__link-hamburger_color_black'
                  }`}
                >
                  {islocationMain && (
                    <Link
                      to={'/saved-news'}
                      style={{ textDecoration: 'inherit', color: 'white' }}
                    >
                      {'Saved articles'}
                    </Link>
                  )}
                  {!islocationMain && (
                    <Link
                      to={'/saved-news'}
                      style={{ textDecoration: 'inherit', color: 'black' }}
                    >
                      {'Saved articles'}
                    </Link>
                  )}
                </li>
                <li
                  className={`navbar__link-hamburger  ${
                    islocationMain ? '' : 'navbar__link-hamburger_color_black'
                  }`}
                >
                  <div
                    className={`navbar__button_signedin  ${
                      islocationMain
                        ? 'navbar__button_signedin-white'
                        : 'navbar__button_color_black'
                    }`}
                  >
                    <span>{username || 'Alex'}</span>
                    <div
                      onClick={onSignOut}
                      className={`navbar__icon ${
                        islocationMain
                          ? 'navbar__icon_color_white'
                          : 'navbar__icon_color_black'
                      }`}
                    ></div>
                  </div>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navigation;
