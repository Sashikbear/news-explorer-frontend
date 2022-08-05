import './Preloader.css';
const Preloader = () => {
  return (
    <section className='preloader'>
      <div className='preloader__circle'></div>
      <span className='preloader__text'>Searching for news...</span>
    </section>
  );
};

export default Preloader;
