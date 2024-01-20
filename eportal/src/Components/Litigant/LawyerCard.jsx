// LawyerCard.js
import React from 'react';

const LawyerCard = ({ name, specialization,imageUrl,description }) => {
  return (
    <div className="lawyerCard">
      <div className="content">
        <b><h2 className='cardName'>{name}</h2></b>
        <p className='cardSpecialization'>{specialization}</p>
        <p>{description}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}'s profile`} />
      </div>
      
    </div>
  );
};

export default LawyerCard;
