import React from 'react';
import Card from '../Cards/Card';
import './ServicesCard.css';

const ServicesCard = ({ services }) => {
  return (
    <section className="container__popular">
      <div className="card_container">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            content={service.content}
            imageUrl={service.imagePath}
            icon={<img src={service.iconComponent} alt={service.title} />}
            buttonText={service.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
