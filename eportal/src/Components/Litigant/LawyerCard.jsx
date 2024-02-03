// // LawyerCard.js
// import React from 'react';

// const LawyerCard = ({ name, lawyertype,imageUrl,description,experience,email,phone,linkedin,state}) => {
//   return (
//     <div className="lawyerCard">
//       <div className="content">
//         <b><h2 className='cardName'>{`Advocate ${name}`}</h2></b>
//         <p className='cardSpecialization'>{`${lawyertype}`}</p>
//         <p className='cardSpecialization'>{`✉️ ${email}`}</p>
//         <p className='cardSpecialization'>{`📞 ${phone}`}</p>
//         {/* <p className='cardSpecialization' >{` ${linkedin}`}</p> */}
//         <p className='cardSpecialization'>{` ${state}`}</p>
//         <p>{description}</p>
//         <p>{`Experience: ${experience} years`}
//         </p>
//       </div>
//       <div className="image-container">
//         <img src={imageUrl} alt={`${name}'s profile`} />
//       </div>
      
//     </div>
//   );
// };

// export default LawyerCard;

// LawyerCard.js
import React from 'react';

const LawyerCard = ({ name, lawyertype, imageUrl,email,phone,experience,successrate,rating }) => {
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
        <p><i class="fa fa-linkedin-square" aria-hidden="true"></i>www.linkedin.com/name</p>
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
          <button>Request</button>
        </div>

      </div>


    </div>
  );
};

export default LawyerCard;