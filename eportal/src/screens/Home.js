import React from 'react'
import './Home.css';


const Home = () => {
  return (
    <>
      
      <nav id="tabs">
        <ul className="font">
          <li><a href="index.html"><h3>Home</h3></a></li>
          <li><a href="./about"><h3>About</h3></a></li>
          <li><a href="./login"><h3>Login</h3></a></li>
          <li><a href="fanq.html"><h3>FAQ'S</h3></a></li>
          <li><a href="contact.html"><h3>Contact</h3></a></li>
        </ul>
      </nav>
      <section>
        <div id="headline" className="font">
          <h1 id="nyaya" >NYAAYA</h1>
          <h2 id="case">CASE MANAGEMENT</h2>
        </div>
      </section>
      <section id="col">
        <div className="buttons" >
          <button className="font" id="first">LOGIN</button>
          <button className="font">SIGN UP</button>
        </div>
      </section>
      <section className="bg">
        <div className="dropup">
          <button className="dropbtn" id="fon" >Select Language</button>
          <div className="dropup-content">
            <a href="#">Assamese</a>
            <a href="#">Bengali</a>
            <a href="#">Bodo</a>
            <a href="#">Dogri</a>
            <a href="#">Gujarati</a>
            <a href="#">Hindi</a>
            <a href="#">Kannada</a>
            <a href="#">Kashmiri</a>
            <a href="#">Konkani</a>
            <a href="#">Maithili</a>
            <a href="#">Malayalam</a>
            <a href="#">Manipuri</a>
            <a href="#">Marathi</a>
            <a href="#">Nepali</a>
            <a href="#">Odhia</a>
            <a href="#">Punjabi</a>
            <a href="#">Sanskrit</a>
            <a href="#">Santali</a>
            <a href="#">Sindhi</a>
            <a href="#">Tamil</a>
            <a href="#">Telugu</a>
            <a href="#">Urdu</a>
          </div>
        </div>

      </section>

    </>
  )
}

export default Home