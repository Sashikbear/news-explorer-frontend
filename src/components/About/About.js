import './About.css';

function About({ props }) {
  return (
    <section className='about'>
      <div className='about__image-wrapper'>
        <div className='about__image'></div>
      </div>
      <div className='about__text-wrapper'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className='about__text'>
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
        <p className='about__text'></p>
      </div>
    </section>
  );
}

export default About;
