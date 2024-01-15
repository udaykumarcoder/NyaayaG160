import React, { useEffect, useState } from 'react'
import './CaseDocinfo.css';
import axios from 'axios';

const CaseDocinfo = () => {
  const[documentInfo,setDocumentInfo]=useState({
    filename:'',
    date:'',
    description:'',
  });

  useEffect(()=>{
    axios.get('http://localhost:3001/details')
      .then(response=>{
        
        const firstDetail=response.data[0];

        if(firstDetail){
          setDocumentInfo({
            filename:firstDetail.title,
            date:firstDetail.date,
            description:firstDetail.description,
          });
        }
      })
      .catch(error=>console.error(error));
  },[]);
  return (
    <>
    <div className="caseInfo">
        <div className="casedocInput">
            <input type="text" placeholder=' 🔍 Search a document' />
        </div>
        <div className="caseFile">
          <div className="casedocTitle">
          <h6>{documentInfo.filename}</h6>
          <p>{documentInfo.description} </p>
          </div>
          <div className="casedocDate">
            <p>📆{documentInfo.date}</p>
            <button>OPEN</button>
          </div>

        </div>
    </div>
    </>
  )
}

export default CaseDocinfo