// rating.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const Rating = () => {
    const location = useLocation();
    const [rate, setRate] = useState(0);
    const [message, setMessage] = useState('');
    const [cnrNumber, setCnrNumber] = useState('');
    const [Error, setError ] = useState('');
    const emailFromcard = location?.state?.email   || '';
    console.log(emailFromcard)
    
    const navigate=useNavigate()
    
    
   

    const handleRatingChange = (event) => {
        setRate(event.target.value);
    };
    const handleSubmit = async (e) => {
    
        e.preventDefault();
        console.log(rate)
        console.log(cnrNumber)
        console.log(emailFromcard)
    try {
      // Send updated profile data to backend
      
      const response = await fetch('http://localhost:3001/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rate, cnrNumber, email:emailFromcard}),
      });
      if(response.ok){
        console.log("done");
        navigate('/litigantaccount');
      console.log('rating updated successfully'); 
      }
      
    } catch (error) {
      console.error('Error updating rating:', error);
     
    }
  };
  

    const handleCnrNumberChange = (event) => {
        setCnrNumber(event.target.value);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                CNR Number:
                <input
                    type="text"
                    value={cnrNumber}
                    onChange={handleCnrNumberChange}
                />
            </label>
            <label>
                Rating:
                <input
                    type="text"
                    value={rate}
                    onChange={handleRatingChange}
                />
                {/* <select value={rating} onChange={handleRatingChange}>
                    <option value="0">Select Rating</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select> */}
            </label>
            <button type="submit">Submit Rating</button>
        </form>
        <p>{message}</p>
    </div>
    );
};

export default Rating;