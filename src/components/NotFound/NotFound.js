import './NotFound.css';
const NotFound = () => {
  return (
    <section className='not-found'>
      <div className='not-found__wrapper'>
        {' '}
        <div className='not-found__icon'></div>
        <h2 className='not-found__title'>Nothing found</h2>
        <span className='not-found__text'>
          Sorry, but nothing matched your search terms.
        </span>
      </div>
    </section>
  );
};

export default NotFound;
