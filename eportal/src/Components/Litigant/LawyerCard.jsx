// LawyerCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerCard = ({ name, lawyertype, imageUrl,email,phone,experience,successrate,rating,profileurl }) => {
  const navigate=useNavigate();
  const request = (event)=>
  {
    navigate('/requestform',{ state: { email } });
   
  } 
  return (
    <div className="lawyerCard">
      <div className="image-container">
      <img src={imageUrl} alt={`${name}'s profile`} />

      </div>
      <div className="content">
        <b><h2 className='cardName'>{`${name}`}</h2></b>
        <div className="cardInline">
          <p className='cardSpecialization'>{lawyertype}</p>
         
          <p>Educational qualifications</p>
        </div>
        <p><i class="fa fa-envelope" aria-hidden="true"></i>{email}</p>
        <p><i class="fa fa-phone" aria-hidden="true"></i>{phone}</p>
        <p><i class="fa fa-linkedin-square" aria-hidden="true"></i><a href={profileurl} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none',color:'black',cursor: 'pointer' }}>{profileurl}</a></p>
        <p>Hyderabad,India</p>
      </div>
        
      <div className="lawyerRatings">
        <div className="cardInline">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <p>{rating}</p>
        </div>
        &nbsp;
        <div className="cardInline">
          <p>{experience}<br />Years of Experience</p>&nbsp;&nbsp;&nbsp;
          <p>{successrate}<br />Case Success</p>
        </div>
        <div >
          <button onClick={request}>Request</button>
        </div>

      </div>


    </div>
  );
};

export default LawyerCard;