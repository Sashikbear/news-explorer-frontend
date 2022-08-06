import './PopupConfirm.css';
function PopupConfirm({ name, isOpen, title, onSignInClick, onClose }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button
          className='button button_type_close'
          type='button'
          aria-label='close'
          onClick={onClose}
        ></button>
        <div className='popup__wrapper'>
          {' '}
          <h2 className='popup__title'>{title}</h2>
          <span className='popup__link' onClick={onSignInClick}>
            Sign in
          </span>
        </div>
      </div>
    </section>
  );
}
export default PopupConfirm;
