// PasswordReset.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PasswordReset2 = () => {
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const navigate=useNavigate();

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    
    // Add logic to check user details in MongoDB and reset password
    try {
        const response = await fetch('http://localhost:3001/resetpassword-Litigant', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, dob: dob.toString(), phone, newPassword }),
          });

      const data = await response.json();

      if (response.ok) {
        // Password reset successful, you can redirect or show a success message
        console.log('Password reset successful:', data);
       
      alert('password Changed  successfully');
      navigate("/login/litigant");
      
      } else {
        // Password reset failed, handle the error (e.g., incorrect details)
        console.error('Password reset failed:', data);
        alert("Password reset failed");
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handlePasswordReset}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <br />

        <label>Contact:</label>
        <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

        <br />

        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset2;
