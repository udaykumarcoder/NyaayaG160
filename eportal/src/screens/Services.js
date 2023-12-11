import React from 'react'
import './Services.css';

const Services = () => {
  return (
    <>
        <section className="about" id='services'>
        <div className="maincontainer">
        <div className="container1">     
        <div className="box1">
          <p>Seek efficient resolution <br /> for managing multiple cases</p>
          <div className="boxbutton">
          <button>
            SignUp
            <span className='icon'><i class="fa-solid fa-arrow-right"></i></span>
          </button>
          </div>
        </div>
        <div className="box2">
          <p>Access your case data <br />and track your case <br />status</p>
          <div className="boxbutton">
          <button>
            Login
            <span className='icon'><i class="fa-solid fa-arrow-right"></i></span>
          </button>
          </div>
        </div>
        </div>
        <div className="container2">
        <div className="vision">
          <h2>VISION</h2>
          <p>Nyaaya envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>
        </div>
        <div className="vision">
          <h2>MISSION</h2>
          <p>Nyaaya envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>

        </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Services;