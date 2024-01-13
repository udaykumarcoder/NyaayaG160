
import React, { useState } from 'react';
import "./Updatedetails.css";
const Updatedetails = () => {
  const [details, setDetails] = useState([]);

  const toggleForm = () => {
    const form = document.getElementById("updateDetailsForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  };

  const submitForm = () => {
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const descriptionInput = document.getElementById("description");
  
    const title = titleInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;
  
    if (title && date && description) {
      const detail = {
        title: title,
        date: date,
        description: description,
      };
      setDetails((prevDetails) => [...prevDetails, detail]);
  
      // Clear form fields
      titleInput.value = "";
      dateInput.value = "";
      descriptionInput.value = "";
    } else {
      alert("Please provide all details.");
    }
  };
  

  return (
    <section>
      <div>
        <h2 className='title'>Update Case Details</h2>
        <br/>
        <button className='updatebtn' onClick={toggleForm}>Update</button>
        <br/>
        
      </div>
      <div>
        <form id="updateDetailsForm" style={{display:"none"}} action="/update" method="post">
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="data" htmlFor="title"><b>Enter Title:&nbsp;&nbsp;</b></label>
                  <input type="text" id="title" name="title" required/>

                  <label className="data" htmlFor="date"><b>Date:&nbsp;&nbsp;</b></label>
                  <input type="date" id="date" name="date" required/>
                </td>
                </tr>
              <tr>
                <td>
                  <label className="data" htmlFor="description"><b>Description:&nbsp;&nbsp;</b></label>
                  
                  <textarea  className="data" id="description" name="description" rows="2" cols="90" placeholder='Enter description for the above title' required></textarea>                </td>
              </tr>
              <tr>
                <td>
                  <button className='updatebtn' type="button" onClick={submitForm}>Submit</button>
                  <br/>
                  <br/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div>
        <table id="detailsTable">
          <thead>
            <tr>
              <th className='fields'>S.No.</th>
              <th className='fields'>Date</th>
              <th className='fields'>Title</th>
              <th className='fields'>Description</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{detail.date}</td>
                <td>{detail.title}</td>
                <td>{detail.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </section>
  );
}

export default Updatedetails;
