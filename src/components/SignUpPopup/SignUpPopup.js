import { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as validate from '../../utils/validateForm';
import useForm from '../../utils/useForm';
import './SignUpPopup.css';
function SignUpPopup({
  isOpen,
  onClose,
  onSignUpSubmit,
  alternative,
  submitButton,
  onSignInClick,
}) {
  const { handleChange, onSubmit, values, errors, isErrorFree } = useForm(
    validate.validateSignUpInfo
  );
  const handleSubmit = (e) => {
    onSubmit(e);
    if (isErrorFree) {
      setIsButtonEnabled(true);
      onSignUpSubmit(values.email, values.password, values.name);
    }
  };
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    values.email = '';
    errors.email = '';
    values.password = '';
    errors.password = '';
    values.name = '';
    errors.name = '';
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <PopupWithForm
      name='signin'
      title='Sign up'
      isOpen={isOpen}
      onClose={onClose}
      isButtonEnabled={isButtonEnabled}
      onSubmit={handleSubmit}
    >
      <label htmlFor='email-input' className='popup__input-label'>
        Email
      </label>
      <input
        id='email-signup-input'
        name='email'
        className='popup__input popup__input_type_email'
        type='email'
        placeholder='Enter email'
        onChange={handleChange}
        value={values.email}
        required
      />
      <span
        className={`popup__error ${errors.email && 'popup__error_visible'}`}
      >
        {errors.email}
      </span>
      <label htmlFor='password-input' className='popup__input-label'>
        Password
      </label>
      <input
        id='password-signup-input'
        type='password'
        name='password'
        className='popup__input popup__input_type_password'
        placeholder='Enter password'
        onChange={handleChange}
        value={values.password}
        required
      />
      <span
        className={`popup__error ${errors.password && 'popup__error_visible'}`}
      >
        {errors.password}
      </span>
      <label htmlFor='name-input' className='popup__input-label'>
        Username
      </label>
      <input
        id='name-input'
        type='text'
        name='name'
        className='popup__input popup__input_type_name'
        placeholder='Enter Username'
        onChange={handleChange}
        value={values.name}
        required
      />
      <span className={`popup__error ${errors.name && 'popup__error_visible'}`}>
        {errors.name}
      </span>
      <button
        type='submit'
        className={`popup__button ${
          isButtonEnabled && 'popup__button_enabled'
        }`}
        onClick={handleSubmit}
      >
        {submitButton}
      </button>
      <div className='popup__alternative-wrapper'>
        <span className='popup__alternative'>or </span>
        <span
          className='popup__alternative popup__alternative_type_link'
          onClick={onSignInClick}
        >
          {alternative}
        </span>
      </div>
    </PopupWithForm>
  );
}
export default SignUpPopup;
