import React from 'react';
import './about.css';
import Image from '../../assets/me2.png';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__decription">Hey! I’m Meriem Mouhim, a web developer and designer based in Casablanca, Morocco. I specialize in creating websites from scratch and working with WordPress to build clean, user-friendly experiences.</p>
            <a href="" className="about btn">Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>
              
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Drawing</h3>
                <span className="skills__number">60%</span>
              </div>
              
              <div className="skills__bar">
                <span className="skills__percentage Drawing"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About