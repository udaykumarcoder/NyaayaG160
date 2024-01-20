import React, { useState, useEffect } from 'react';
import "./Uploaddocs.css";
import './PDFViewer.css'
import Filetable from './Filetable';
import { Document, Page } from 'react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;



const Uploaddocs = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [pdfFile, setPDFFile] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:3001/files');
        const filesData = await response.json();
        setFiles(filesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFiles();
  }, []);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const submitForm = async () => {
    const cnrNumber = document.getElementById("cnr").value;
    const fileName = document.getElementById("fileName").value;
    const fileUpload = document.getElementById("fileUpload");
  
    if (fileName && fileUpload.files.length > 0) {
      const formData = new FormData();
      formData.append('cnr', cnrNumber);
      formData.append('fileName', fileName);
  
      for (let i = 0; i < fileUpload.files.length; i++) {
        formData.append('fileUpload', fileUpload.files[i]);
      }
  
      try {
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          
          const filesResponse = await fetch('http://localhost:3001/files');
          const filesData = await filesResponse.json();
          setFiles(filesData);
        } else {
          alert('Upload failed');
        }
      } catch (error) {
        console.error(error);
        alert('Upload failed');
      }
  
      document.getElementById("cnr").value = '';
      document.getElementById("fileName").value = '';
      fileUpload.value = "";
    } else {
      alert("Please provide a file name and choose at least one file.");
    }
  };
  const viewFile = async(filename) => {
     let fileContentArrayBuffer;

    try {
      const response = await fetch(`http://localhost:3001/files/${encodeURIComponent(filename)}`);
      if (response.ok) {
        const fileContent = await response.arrayBuffer();
        const fileExtension = filename.split('.').pop().toLowerCase();

        if (fileExtension === 'pdf') {
          
            
            const newTab = window.open();
            newTab.document.write(`
              <!DOCTYPE html>
              <html>
                <head>
                  <title>${filename}</title>
                </head>
                <body>
                <embed width="1000" height="800" src="data:application/pdf;base64,${btoa(fileContent)}" type="application/pdf" />
                </body>
                </body>
              </html>
            `);
          } else {
            // For other file types, open a new tab with the content
            const newTab = window.open();
            newTab.document.write(`
              <!DOCTYPE html>
              <html>
                <head>
                  <title>${filename}</title>
                </head>
                <body>
                  <pre>${fileContent}</pre>
                </body>
              </html>
            `);
          }
      } else {
        console.error('Error fetching file content:', response.status);
        alert('Error fetching file content');
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching file content');
    }
  };

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    const fileType = ['application/pdf'];

    if (selectedFile && fileType.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setPDFFile(e.target.result);
      };
    } else {
      setPDFFile(null);
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
                <label className="data" htmlFor="fileName"><b>CNR Number:&nbsp;&nbsp;</b></label>
                  <input type="number" id="cnr" name="cnr" required/>
                  <label className="data" htmlFor="fileName"><b>File Name:&nbsp;&nbsp;</b></label>
                  <input type="text" id="fileName" name="fileName" required/>
                  <br/>
                  <label  className="data" htmlFor="fileUpload"><b>Choose File:&nbsp;&nbsp;</b></label>
                  <input  type="file" id="fileUpload" name="fileUpload" accept=".txt, .pdf, .doc , image/, video/" onChange={handleChange} />
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
        {pdfFile ? (
          <div>
          {console.log('pdfFile:', pdfFile)}
          <Document
          file={pdfFile }
          onLoadSuccess={() => setPageNumber(1)}
          onLoadError={(error) => console.error('PDF loading error:', error)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
            </div>
        ) : (
          <p></p>
        )}
      </div>
      </section>
  );
};

export default Uploaddocs;
