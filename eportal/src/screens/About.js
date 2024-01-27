import React from 'react';

import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      

      
      <section className="about" id='about'>

        <div className="maincontainer">

          <div className="card box1" >
            <div className="card-body" >
              <p className="card-text">Seek efficient resolution for managing multiple cases</p>
              <div className="abtbuttons">
              <Link to="/signup"><button>Signup➤</button>  </Link>
              </div>
            </div>
          </div>
          <div className="vision" >
            <h2 className='abtheadings'>VISION</h2>
            <p className='abtboxcontent'>Nyaaya envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>
          </div>
        </div>
        <div className="maincontainer">

          <div className="card box2" >
            <div className="card-body " >
              <p className="card-text">Access your case data and track your case status</p>
              <div className="abtbuttons">
              <Link to="/login"><button >Login➤</button>  </Link>
            </div>
            </div>
          </div>
          <div className="vision ">
            <h2 className='abtheadings'>MISSION</h2>
            <p className='abtboxcontent'>"We aim to revolutionize the Indian judicial system by establishing an online portal for efficient case management. Our mission is to enable seamless online case submission, facilitate digital judgment uploads, document storage, and allow smooth case transfers between courts."</p>
          </div>
        </div>

      </section>
      <section className="about2" >
        <div className="aboutpage">
          <h2 className='abtheadings'>About</h2>
          <p>At NYAAYA, we understand the complexities and challenges that come with case management.<br />
            Whether you're an individual seeking efficient resolution for a personal matter or a proffessional <br />managing multiple cases , our e-portal is designed to streamline the entire process.  </p>
        </div>
        <div className="aboutpage">
          <h2 className='abtheadings'>Why Nyaaya</h2>
          <p>We believe that powerful tools should also be simple to use, NYAAYA boastsan intuitive interface that <br />
            allows you to effortlessly manage and track your cases , giving you more time to focus on what <br />
            matters most.</p>
        </div>

      </section>
    </>
  )
}

export default About