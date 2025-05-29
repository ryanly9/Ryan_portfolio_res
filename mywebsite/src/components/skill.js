import React from 'react';
import './skill.css';

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        Build and Deploy AI and Predictive Models. Eager to Apply technical expertise and project experience to Contribute to Innovative AI Solutions.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src="/images/mlD.png" alt="ML" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Machine Learning Dev</h2>
            <p>
              Built Predictive Models like Obesity Prediction that use health and lifestyle data to predict obesity risk.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="/images/ai.png" alt="AI" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Artificial Intelligence</h2>
            <p>
              Working on a Chatbot for University Students to help them using natural language processing and conversational AI.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="/images/webD.png" alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Built an Employee Management System to help Organizations manage staff info & roles through an easy-to-use Website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
