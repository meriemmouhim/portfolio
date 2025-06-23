import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Drawing",
    description:
      "Developing visual communication skills through sketching, illustration, and concept art. My drawing practice enhances my design work and helps me quickly visualize ideas."
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern technologies like React, JavaScript, and CSS. I write clean code that balances functionality with maintainability."
  },
  {
    id: 3,
    image: Image3,
    title: "UI/UX design",
    description:
      "Creating intuitive interfaces and seamless user experiences through wireframing, prototyping, and user-centered design principles. I focus on solving problems with clean aesthetics and functional layouts."
  },
];

const services = () => {
  return (
    <section className="services container service" id='services'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default services