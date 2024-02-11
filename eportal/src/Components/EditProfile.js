import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const EditProfile = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const emailFrominfo = location?.state?.emailFromLogin ||  '';
  const [newphone, setNewphone] = useState('');
  const [newname, setNewname] = useState('');
  const [newpropic, setNewpropic] = useState('');
  const [Error, setError ] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(false);
  console.log("hii", emailFrominfo);
  const imageUrl = `http://localhost:3001/images/DSC0598.JPG`;

  const handleSubmit = async (e) => {
    
        e.preventDefault();
    try {
      // Send updated profile data to backend
      
      const response = await fetch('http://localhost:3001/api/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newname, email:emailFrominfo , newphone , newpropic }),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      navigate('/Advocateaccount');
      console.log('Profile updated successfully'); // Redirect to profile page after successful update
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile');
    }
  };


  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>newname:</label>
        <input type="text" value={newname} onChange={(e) => setNewname(e.target.value)} />
        <label>newphone:</label>
        <input type="text" value={newphone} onChange={(e) => setNewphone(e.target.value)} />
       
        {/* Provide option to upload new profile picture */}
        <label><b>Profile Picture</b></label>
        <input type="file" accept="image/*" onChange={(e) => setNewpropic(e.target.files[0])} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
    
  );
};

export default EditProfile;


            