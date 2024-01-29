// LawyerCard.js
import React from 'react';

const LawyerCard = ({ name, lawyertype,imageUrl,description,experience,email,phone,linkedin,state}) => {
  return (
    <div className="lawyerCard">
      <div className="content">
        <b><h2 className='cardName'>{`Advocate ${name}`}</h2></b>
        <p className='cardSpecialization'>{`${lawyertype}`}</p>
        <p className='cardSpecialization'>{`✉️ ${email}`}</p>
        <p className='cardSpecialization'>{`📞 ${phone}`}</p>
        {/* <p className='cardSpecialization' >{` ${linkedin}`}</p> */}
        <p className='cardSpecialization'>{` ${state}`}</p>
        <p>{description}</p>
        <p>{`Experience: ${experience} years`}
        </p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}'s profile`} />
      </div>
      
    </div>
  );
};

export default LawyerCard;
