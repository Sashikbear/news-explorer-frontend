import './SearchForm.css';
import * as validate from '../../utils/validateForm';
import useForm from '../../utils/useForm';
import { useEffect } from 'react';
function SearchForm({ onSearchSubmit }) {
  const { handleChange, onSubmit, values, errors } = useForm(
    validate.validateSearch
  );
  const handleSubmit = (e) => {
    onSubmit(e);
    if (values.search) {
      onSearchSubmit(values.search);
    }
  };

  useEffect(() => {
    values.search = '';
    // eslint-disable-next-line
  }, []);

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__wrapper'>
        <input
          className='search-form__input'
          type='search'
          id='search'
          name='search'
          placeholder='Enter topic'
          onChange={handleChange}
          value={values.search}
        ></input>
        <button className='search-form__button'>Search</button>
      </div>
      <span
        className={`search-form__error ${
          errors.search && 'search-form__error_visible'
        }`}
      >
        {errors.search}
      </span>
    </form>
  );
}

export default SearchForm;
