import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div className='App'>
      <section id="intro">
        <div className="introContent">
          <span className="hello">🙋🏻 <b>Hello</b></span>
          <span className="introtext">
            I'm <span className="introname">Ryan Ahmed</span> <br />
            Aspiring Machine Learning Engineer
          </span>
          <p className="introPara">
            Masters Student in Computer Application with hands-on experience in Machine Learning, Web Development and Database Management.
          </p>
          <Link 
            activeClass="active" 
            to="works" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={300}
          >
            <button className="btn"><b>See more</b></button>
          </Link>
        </div>

        <div className="div-img">
          <img src="/images/myphoto.png" alt="Ryan Ahmed" className="bg" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
