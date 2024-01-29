import React from 'react'
import './Faq.css';

const Faq = () => {
  return (
    <>
      <div className="fcontainer" id='faq'>
        <div className="fmainblock">
          <div className="fblock1">
            <div className="fheading">
              <h3> ➤FAQ'S</h3>
            </div>
            <div className="fpara">
              <p>How does it work and where to start? We've collected answers to most of the
                basic questions<br /> in order to
                be as open and transparent
                as possible.</p>
            </div>
          </div>
          <div className="fblock2">
            <h1>Let us answer some of the most  common questions
              you might have upfront.</h1>

         
          <div className='bigbox'>
            <br />
            <hr className='hr' />
            <details className='labels'>
              <summary className='Font2'>Advocate registration</summary>
              <p className='summarypara'>
              1. Can I manage multiple cases simultaneously? <br />
              A: Yes, multiple cases can be managed simultaneously using CNR number of a particular case.<br /><br />
              2. What credentials are required for advocate verification?<br />
              A: Bar registration number is required for advocate verification<br /><br />
              3. How do I file a new case through the portal?<br />
              A: Case filing form is available on Nyaaya to file a new case.<br /><br />
              </p>
            </details>
            <br />
            <hr className='hr' />
            <details className='labels'>
              <summary className='Font2'>Litigant registration</summary>
              <p className='summarypara'>
              1. How can I find experienced and assured advocates?<br />
              A: You can choose your advocate from the advocate profiles available on Nyaaya whose profiles are verified .<br /><br />
              2. Can I track the status of my case online?<br />
              A: Yes, Nyaaya provides a case tracking feature to track the status of your case<br /><br />
              3. How can I view or request copies of filed documents or court orders?<br />
              A: Case documents submitted in the court can be viewed using the case documents feature available on Nyaaya<br /><br />
              </p>
            </details>
            <br />
            <hr className='hr' />
            <details className='labels'>
              <summary className='Font2'>Case Filing</summary>
              <p className='summarypara'>
              1. How do I start a new case filing on the portal as a litigant? <br />
              A: You can choose your advocate from the advocate profiles and send your case details to the advocate. If the advocate accepts your case then the advocate can file your case on Nyaaya.<br /><br />
              2. What type of cases can be filed using Nyaaya?<br />
              A: You can file Criminal and Civil cases using Nyaaya<br /><br />
              </p>
            </details>
            <br />
            <hr className='hr' />
            </div>

          </div>
        </div>



      </div>
    </>
  )
}

export default Faq