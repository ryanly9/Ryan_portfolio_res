import React from 'react'
import './works.css';

const Works = () => {
  return (
    <section id="works">
      <h2 className='worksTitle'>Projects</h2>
      <span className="worksDesc">
        Here's a look at some of the practical projects I've built while learning and applying my skills in web development and machine learning.
      </span>
      <br /><br />

      <div className="worksImgs">
        <div className="imageWrapper"> <a href="https://wellnessworks.onrender.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/pjo.jpeg" alt="" className="worksImg" /> 
          <div className="overlay-text">Click to Open</div></a>
        </div>
        <div className="imageWrapper">
          <img src="/images/pjo1.jpeg" alt="" className="worksImg" />
          <div className="overlay-text">Click to Open</div>
        </div>
        <div className="imageWrapper">
          <img src="/images/project3.png" alt="" className="worksImg" />
          <div className="overlay-text">Working 🧑‍💻</div>
        </div>
      </div>

      <button className='worksBtn'>See More</button>
    </section>
  );
};

export default Works;
