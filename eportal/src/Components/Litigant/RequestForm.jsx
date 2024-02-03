import React from 'react'
import "./RequestForm.css"

const RequestForm = () => {
  return (
    <div className='reqform'>
    <center><h1>Request Form</h1></center>
    <h3>Advocate:</h3>
       <label className="req" htmlFor='name'><h3>Name: &nbsp;&nbsp;</h3></label>
       <input className="inputs" style={{marginLeft:"60px"}} />
       <br/>
       <label className="req" htmlFor='name'><h3>Contact: &nbsp;&nbsp;</h3></label>
       <input className="inputs" style={{marginLeft:"35px"}}  />
       <br/>
       <label className="req" htmlFor='name'><h3>Email: &nbsp;&nbsp;</h3></label>
       <input className="inputs" style={{marginLeft:"70px",marginBottom:"20px"}} />
       <br/>
       <label className="req" htmlFor='name'><h3>Description: &nbsp;&nbsp;</h3></label>
       <textarea className="inputs" style={{marginTop:"20px"}} rows={2} cols={70}/>
       <button style={{marginLeft:"45rem",marginTop:"10px"}}>Send mail</button>
       <p style={{marginLeft:"520px",marginTop:"10px"}}>Note:By hitting send mail button a mail will be <br/>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;sent to the advocate you have choosen. </p>
    </div>
  )
}

export default RequestForm
