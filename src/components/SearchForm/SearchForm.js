import './SearchForm.css';

function SearchForm({ onSearchSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit();
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-form__input'
        type='search'
        id='search'
        name='search'
        placeholder='Enter topic'
      ></input>
      <button className='search-form__button' onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
