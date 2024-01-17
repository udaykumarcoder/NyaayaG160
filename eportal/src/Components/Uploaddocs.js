
import React, { useState } from 'react';
import "./Uploaddocs.css";

const Uploaddocs = () => {
  const [files, setFiles] = useState([]);

  const toggleForm = () => {
    const form = document.getElementById("uploadForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  };

  const submitForm = () => {
    const fileName = document.getElementById("fileName").value;
    const fileUpload = document.getElementById("fileUpload");

    if (fileName && fileUpload.files.length > 0) {
      const currentDate = new Date().toLocaleDateString();

      // Loop through each selected file
      for (let i = 0; i < fileUpload.files.length; i++) {
        const file = {
          date: currentDate,
          name: fileName,
          content: null,
          filename: fileUpload.files[i].name,
        };
        setFiles((prevFiles) => [...prevFiles, file]);
      }

      // Clear form fields
      document.getElementById("fileName").value = "";
      fileUpload.value = "";
    } else {
      alert("Please provide a file name and choose at least one file.");
    }
  };

  return (
    <section>
      <div>
        <h2 className='title'>Upload Case Documents</h2>
        <br/>
        <button className='uploadbtn' onClick={toggleForm}>Upload</button>
        <br/>
        <br/>
      </div>
      <div>
        <form id="uploadForm" style={{display:"none"}} action="/upload" method="post" encType="multipart/form-data">
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="data" htmlFor="fileName"><b>File Name:&nbsp;&nbsp;</b></label>
                  <input type="text" id="fileName" name="fileName" required/>
                  <label  className="data" htmlFor="fileUpload"><b>Choose File:&nbsp;&nbsp;</b></label>
                  <input  type="file" id="fileUpload" name="fileUpload" accept=".txt, .pdf, .doc"/>
                  <button className='uploadbtn' type="button" onClick={submitForm}>Submit</button>
                  <br/>
                  <br/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div>
        <table id="fileTable">
          <thead>
            <tr>
              <th className='fields'>S.No.</th>
              <th className='fields'>Date</th>
              <th className='fields'>File Name</th>
              <th className='fields'>View File</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{file.date}</td>
                <td>{file.name}</td>
                <td>
                  <a href={`/viewFile?filename=${encodeURIComponent(file.filename)}`} target="_blank" rel="noopener noreferrer">View File</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div id="fileViewer" style={{display: "none"}}>
          <h2>File Viewer</h2>
          <p id="fileContent"></p>
        </div>
      </div>
    </section>
  );
}

export default Uploaddocs;