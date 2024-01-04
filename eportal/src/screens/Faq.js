import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [height, setHeight] = useState('auto'); // initial height

  const toggleDropdown = () => {
    // adjust height when dropdown is toggled
    setHeight(height === 'auto' ? '100vh' : 'auto');
  };

  return (
    <div className="fcontainer w-full" id='faq'>
      <div className="fmainblock">
        <div className="fblock1">
          <div className="fheading">
            <h3> ➡️FAQ'S</h3>
          </div>
          <div className="fpara">
            How does it work and where to start?We've collected answers to most of the basic questions in order to be as open and transparent as possible.
          </div>
        </div>
        <div className="fblock2 fs-2">
          <p>Let us answer some of the most common questions you might have upfront.</p>
        </div>
        <div className='bigbox'>
          <br/>
          <hr className='hr'/>
          <details className='labels' onClick={toggleDropdown}>
            <summary className='font'>Advocate registration</summary>
              <p className='lpara'>Let us answer some of the most common questions you might have upfront.</p>
          </details>
          <br/>
          <hr className='hr'/>
          <details className='labels' onClick={toggleDropdown}>
            <summary className='font'>Litigant registration</summary>
            <p className='lpara'>Let us answer some of the most common questions you might have upfront.</p>

          </details>
          <br/>
          <hr className='hr'/>
          <details className='labels' onClick={toggleDropdown}>
            <summary className='font'>Case Tracking</summary>
            <p className='lpara'>Let us answer some of the most common questions you might have upfront.</p>
          </details>
          <br/>
          <hr className='hr'/>
        </div>
      </div>
    </div>
  )
}

export default Faq;
