import React, { useEffect, useState } from 'react';
import Filetable from './Filetable';
import "./Uploaddocs.css";

const Uploaddocs = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [cnr, setCnr] = useState(''); 

  useEffect(() => {
  const fetchFiles = async () => {
    try {
      const response = await fetch(`http://localhost:3001/files?cnr=${cnr}`);
      const filesData = await response.json();
      setFiles(filesData);
    } catch (error) {
      console.error(error);
    }
  };

  fetchFiles();
}, [cnr]);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  
  const submitForm = async () => {
    const fileName = document.getElementById("fileName").value;
    const cnrValue = document.getElementById("cnr").value;
    const fileUpload = document.getElementById("fileUpload");
  
    // Update the cnr state with the entered CNR value
    setCnr(cnrValue);
  
    if (fileName && fileUpload.files.length > 0) {
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('cnr', cnrValue);
  
      for (let i = 0; i < fileUpload.files.length; i++) {
        formData.append('fileUpload', fileUpload.files[i]);
      }
  
      try {
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const filesResponse = await fetch(`http://localhost:3001/files?cnr=${cnrValue}`);
          const filesData = await filesResponse.json();
          setFiles(filesData);
        } else {
          alert('Upload failed');
        }
      } catch (error) {
        console.error(error);
        alert('Upload failed');
      }
  
      document.getElementById("fileName").value = "";
      fileUpload.value = "";
    } else {
      alert("Please provide a file name and choose at least one file.");
    }
  };
  
  const viewFile = async(filename) => {
    try {
      const response = await fetch(`http://localhost:3001/files/${encodeURIComponent(filename)}`);
      if (response.ok) {
        const fileContentBase64 = await response.text();
        
        // Decode Base64 content
        const decodedContent = atob(fileContentBase64);
        console.log('Decoded Content:', decodedContent);
        const newTab = window.open();
        newTab.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${filename}</title>
          </head>
          <body>
            <pre>${decodedContent}</pre>
          </body>
        </html>
      `);
      } else {
        console.error('Error fetching file content:', response.status);
        alert('Error fetching file content');
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching file content');
    }
  };

  return (
    <section>
      <div>
        <h2 className='title'>Upload Case Documents</h2>
        <br />
        <button className='uploadbtn' onClick={toggleForm}>Upload</button>
        <br />
        <br />
      </div>

      {formVisible && (
        <div>
          <form id="uploadForm" action="/upload" method="post" encType="multipart/form-data">
          
            <table>
            <tbody>
              <tr>
                <td>
                <label className="data" htmlFor="cnr"><b>CNR Number:&nbsp;&nbsp;</b></label>
                  <input type="number" id="cnr" name="cnr" required/>
                  <label className="data" htmlFor="fileName"><b>File Name:&nbsp;&nbsp;</b></label>
                  <input type="text" id="fileName" name="fileName" required/>
                  <br/>
                  <label  className="data" htmlFor="fileUpload"><b>Choose File:&nbsp;&nbsp;</b></label>
                  <input  type="file" id="fileUpload" name="fileUpload" accept=".txt, .pdf, .doc , image/, video/ "/>
                  <button className='uploadbtn' type="button" onClick={submitForm}>Submit</button>
                  <br/>
                  <br/>
                </td>
              </tr>
            </tbody>
          </table>
          </form>
        </div>
      )}

      <div>
        
        <Filetable files={files} onViewFile={viewFile} />
      </div>
      
    </section>
  );
}

export default Uploaddocs;