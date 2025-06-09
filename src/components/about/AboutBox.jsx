import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i class="about__icon fa-solid fa-fire-flame-curved"></i>

            <div>
                <h3 className="about__title">300+</h3>
                <span className="about__subtitle">Hours of Coding & Design</span>
            </div>
        </div>

        <div className="about__box">
            <i class="about__icon fa-solid fa-mug-hot"></i>

            <div>
                <h3 className="about__title">20+</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon fas fa-play"></i>

            <div>
                <h3 className="about__title">200+</h3>
                <span className="about__subtitle">Tutorials Followed</span>
            </div>
        </div>

        <div className="about__box">
            <i class="about__icon fa-solid fa-bug"></i>

            <div>
                <h3 className="about__title">50+</h3>
                <span className="about__subtitle">Bugs Fixed (and Cried Over)</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox