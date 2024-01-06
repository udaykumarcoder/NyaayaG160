import React from 'react'
import './Faq.css';

const Faq = () => {
  return (
    <>
    <div className="fcontainer" id='faq'>
      <div className="fmainblock">
      <div className="fblock1">
      <div className="fheading">
      <h3> ➡️FAQ'S</h3>
      </div>
      <div className="fpara">
        <p>How does it work and where to start?<br/> We've collected answers to most of the
        <br/>basic questions in order to 
        be as <br/>open and transparent 
        as possible.</p>
      </div>
      </div>
      <div className="fblock2">
        <h1>Let us answer some of the most <br/> common questions 
        you might <br/>have upfront.</h1>

      </div>
      <div className='bigbox'>
      <br/>
        <hr className='hr'/>
        <details className='labels'>
        <summary className='font'>Advocate registration</summary>
        Let us answer some of the <br/>
        most common questions <br/>
        you might have upfront.
        </details>
        <br/>
        <hr className='hr'/>
        <details className='labels'>
        <summary className='font'>Litigant registration</summary>
        1.I am an Advocate,how should I register myself on Nyaaya? <br/>
        To register on eFiling, fill up the online registration form. Click on the ‘New userRegister here’ link in the log-in screen to access the registration form.<br/>
        Facility for verification by Bar Council is also provided in the form. If there is no change in data fetched from Bar Council records, verification process is completed instantly.<br/>
        If there is some change in the data fetched from the Bar Council records, such as mobile number, or if the data is not available with Bar Counciluser can register by entering the new mobile number.<br/>
        In such cases, registration can be completed, however the verification will be done later. You may have to wait for accessing the services till re-verification from Bar Council is complete.
        </details>
        <br/>
        <hr className='hr'/>
        <details className='labels'>
        <summary className='font'>Case Filing</summary>
        Let us answer some of the <br/>
        most common questions <br/>
        you might have upfront.
        </details>
        <br/>
        <hr className='hr'/>
        <details className='labels'>
        <summary className='font'>Case Appeal</summary>
        Let us answer some of the <br/>
        most common questions <br/>
        you might have upfront.
        </details>
        <br/>
        <hr className='hr'/>

      </div>
      </div>
      

    </div>
    </>
  )
}

export default Faq