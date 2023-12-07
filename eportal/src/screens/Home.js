import React from 'react'
import Navbar from '../screens/Navbar';
import {Link} from 'react-router-dom';
import './Home.css';




const Home = () => {
  return (
    <>

      <div className='HOME'>
        <Navbar />
        <section>
          <div id="headline" className="font">
            <h1 id="nyaya" >NYAAYA</h1>
            <h2 id="case">CASE MANAGEMENT</h2>
          </div>
        </section>
        <section>
          <div className="buttons" >
          <Link to="/login" className="font" id="first"> <button>LOGIN</button> </Link>          </div>
        </section>
        <section className="drop">
          <select className="dropup-content">
            <option value="default">English</option>
            <option value="">Assamese</option>
            <option value="">Bengali</option>
            <option value="">Bodo</option>
            <option value="">Dogri</option>
            <option value="">Gujarati</option>
            <option value="">Hindi</option>
            <option value="">Kannada</option>
            <option value="">Kashmiri</option>
            <option value="">Konkani</option>
            <option value="">Maithili</option>
            <option value="">Malayalam</option>
            <option value="">Manipuri</option>
            <option value="">Marathi</option>
            <option value="">Nepali</option>
            <option value="">Odhia</option>
            <option value="">Punjabi</option>
            <option value="">Sanskrit</option>
            <option value="">Santali</option>
            <option value="">Sindhi</option>
            <option value="">Tamil</option>
            <option value="">Telugu</option>
            <option value="">Urdu</option>
          </select>
        </section>
      </div>
      <div className="pagecolor">
      <section className="about">
        <div className="maincontainer">
        <div className="container1">     
        <div className="box1">
          <p>Seek efficient resolution <br /> for managing multiple <br />cases</p>
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
      <section className="about2">
        <div className="aboutpage">
          <h2>About</h2>
          <p>At NYAAYA, we understand the complexities and challenges that come with case management.<br/>
          Whether you're an individual seeking efficient resolution for a personal matter or a proffessional <br/>managing multiple cases , our e-portal is designed to streamline the entire process.  </p>
        </div>
        <div className="aboutpage">
          <h2>Why Nyaaya</h2>
          <p>We believe that powerful tools should also be simple to use, NYAAYA boastsan intuitive interface that <br/>
          allows you to effortlessly manage and track your cases , giving you more time to focus on what <br/>
          matters most.</p>
        </div>
        
      </section>
      </div>

    



    </>
  )
}

export default Home