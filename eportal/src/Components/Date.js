import React, { useState } from 'react';

function DateInput({ value, onChange }) {
    const [date, setDate] = useState("dd-mm-yyyy");

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate);
        onChange(newDate); // Invoke the onChange prop with the updated date
    };

    return (
        <div className="inputs col-sm-7">
            <input
                type="date"
                id="dob"
                name="dob"
                value={date}
                min="1900-01-01"
                max="2024-12-31"
                onChange={handleDateChange}
            />
        </div>
    );
}

export default DateInput;
