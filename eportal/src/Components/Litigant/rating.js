import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Rating = () => {
    const location = useLocation();
    const [rate, setRate] = useState('');
    const [cnrNumber, setCnrNumber] = useState('');
    const [error, setError] = useState('');
    const emailFromCard = location?.state?.email || '';
    const navigate = useNavigate();

    const handleRatingChange = (event) => {
        setRate(event.target.value);
    };

    const handleCnrNumberChange = (event) => {
        setCnrNumber(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const ratingResponse = await fetch('http://localhost:3001/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rate, cnrNumber, email: emailFromCard }),
            });

            if (!ratingResponse.ok) {
                throw new Error('Enter a Valid CNR');
            }

            console.log('Rating submitted successfully');
            navigate('/litigantaccount');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    CNR Number:
                    <input type="text" value={cnrNumber} onChange={handleCnrNumberChange} />
                </label>
                <label>
                    Rating:
                    {/* <input type="text" value={rate} onChange={handleRatingChange} /> */}
                    <select value={rate} onChange={handleRatingChange} >
                    <option value="0">Select Rating</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>
                </label>
                <button type="submit">Submit Rating</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Rating;