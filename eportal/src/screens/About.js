import React from 'react'

import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      
      <section className="about" id='about'>

        <div className="maincontainer" style={{ padding: '10px'}}>

          <div className="card w-100 " style={{ padding: '10px', margin: '10px' }}>
            <div className="card-body fs-4" style={{ padding: '10px', margin: '10px' }}>
              <p className="card-text">Seek efficient resolution for managing multiple cases</p>
              <Link to="/signup"><button className='btn btn-primary btn-sm ' style={{ padding: '10px', margin: '10px' }}>Signup<span className='icon'><i className="fa-solid fa-arrow-right"></i></span></button>  </Link>
            </div>
          </div>
          <div className="vision " style={{ padding: '10px', margin: '10px' }}>
            <h2>VISION</h2>
            <p>Nyaaya envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>
          </div>
        </div>
        <div className="maincontainer" style={{ padding: '10px', margin: '10px' }}>

          <div className="card w-100 " style={{ padding: '10px', margin: '10px' }}>
            <div className="card-body fs-4" style={{ padding: '10px', margin: '10px' }}>
              <p className="card-text">Access your case data and track your case status</p>
              <Link to="/signup"><button className='btn btn-primary btn-sm ' style={{ padding: '10px', margin: '10px' }}>Signup<span className='icon'><i className="fa-solid fa-arrow-right"></i></span></button>  </Link>
            </div>
          </div>
          <div className="vision " style={{ padding: '10px'}}>
            <h2>MISSION</h2>
            <p>Nyaaya envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>
          </div>
        </div>





      </section>
      <section className="about2" >
        <div className="aboutpage">
          <h2>About</h2>
          <p>At NYAAYA, we understand the complexities and challenges that come with case management.<br />
            Whether you're an individual seeking efficient resolution for a personal matter or a proffessional <br />managing multiple cases , our e-portal is designed to streamline the entire process.  </p>
        </div>
        <div className="aboutpage">
          <h2>Why Nyaaya</h2>
          <p>We believe that powerful tools should also be simple to use, NYAAYA boastsan intuitive interface that <br />
            allows you to effortlessly manage and track your cases , giving you more time to focus on what <br />
            matters most.</p>
        </div>

      </section>
    </>
  )
}

export default About