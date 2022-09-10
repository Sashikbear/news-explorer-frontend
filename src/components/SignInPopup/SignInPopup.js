import { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as validate from '../../utils/validateForm';
import useForm from '../../utils/useForm';
import './SignInPopup.css';
function SignInPopup({
  isOpen,
  onClose,
  onSignInSubmit,
  onSignUpClick,
  alternative,
  submitButton,
}) {
  const { handleChange, onSubmit, values, errors, isErrorFree } = useForm(
    validate.validateLoginInfo
  );
  const handleSubmit = (e) => {
    onSubmit(e);
    if (isErrorFree) {
      setIsButtonEnabled(true);
      onSignInSubmit(values.email, values.password);
    }
  };
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    values.email = '';
    errors.email = '';
    values.password = '';
    errors.password = '';
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <PopupWithForm
      name='signin'
      title='Sign in'
      isOpen={isOpen}
      onClose={onClose}
      isButtonEnabled={isButtonEnabled}
      onSubmit={handleSubmit}
      onSignUpClick={onSignUpClick}
    >
      <label htmlFor='email-input' className='popup__input-label'>
        Email
      </label>
      <input
        id='email-input'
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
        id='password-input'
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
      <button
        type='submit'
        className={`popup__button ${
          isButtonEnabled && 'popup__button_enabled'
        }`}
      >
        {submitButton}
      </button>
      <div className='popup__alternative-wrapper'>
        <span className='popup__alternative'>or </span>
        <span
          className='popup__alternative popup__alternative_type_link'
          onClick={onSignUpClick}
        >
          {alternative}
        </span>
      </div>
    </PopupWithForm>
  );
}
export default SignInPopup;
