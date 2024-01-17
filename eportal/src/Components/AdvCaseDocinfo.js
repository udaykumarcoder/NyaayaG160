import React,{useEffect,useState} from 'react'
import Filetable from './Filetable';
import "./Litigant/CaseDocinfo.css";

const AdvCaseDocinfo = () => {

    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetchFiles = async () => {
          try {
            const response = await fetch('http://localhost:3001/files');
            const filesData = await response.json();
            setFiles(filesData);
          } catch (error) {
            console.error(error);
            // Handle error fetching files
          }
        };
        fetchFiles();
  }, []);
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
        <h2 className='doctitle'>Case Documents</h2>
        <br />
        
        <br />
        <br />
      </div>
    <div className='doctable'>
        <Filetable files={files} onViewFile={viewFile} />
      </div>
      </section>
  );
};

export default AdvCaseDocinfo