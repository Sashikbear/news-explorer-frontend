import './PopupWithForm.css';
function PopupWithForm({ name, isOpen, title, onClose, onSubmit, children }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button
          className='button button_type_close'
          type='button'
          aria-label='close'
          onClick={onClose}
        ></button>
        <form
          noValidate
          name={`form-${name}`}
          className={`selected-form popup__form popup__form_type_${name}`}
          onSubmit={onSubmit}
        >
          <h2 className='popup__form-title'>{title}</h2>
          {children}
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
