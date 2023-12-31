import React, { useState } from 'react';

function DateInput() {
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); // Set initial state to today's date

    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the state when the input value changes
    };

    return (
        <div className="inputs col-sm-7">
            <input 
                type="date" 
                id="start" 
                name="trip-start" 
                value={date} 
                min="1900-01-01" 
                max="2024-12-31" 
                onChange={handleDateChange} // Handle the input change
            />
        </div>
    );
}

export default DateInput;
