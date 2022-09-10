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
          Hey, I'm Alexandra Gritsenko, a fullstack web developer with
          experience in building web pages and web applications. My stack MERN -
          based (MongoDB, ExpressJS, React, Node), with many additional cool
          things I'm passionately learning at the moment.
        </p>
        <p className='about__text'>
          I'm looking forward to future collaborations, hit me up using the
          links below.
        </p>
        <p className='about__text'></p>
      </div>
    </section>
  );
}

export default About;
