import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import Introduction from './SubComponent/Introduction.js';
import AboutDimpleAnil from './SubComponent/AboutDimpleAnil.js';



export default function About() {
    // let aboutKey = 1;
    const [aboutKey, setAboutKey] = useState(1);
    // const handleChange = (value) => {
    //   console.log(value);
    //   setAboutKey(value);
    // }

      return(
        <div className="wrap">        
          <Header />
          <section class="img-responsive" data-stellar-background-ratio='0.5' style={{backgroundImage: 'url("images/GC/flower.jpg")' , backgroundsize: 'cover' , height: '260px' , backgroundposition: '0% -18.1875px'}}>
            <div class="container">
              <div class="row align-items-center justify-content-center site-hero-inner">
                <div class="col-md-8 text-center">
                  <div class="mb-5 element-animate fadeInUp element-animated">
                    {/* <div class="block-17">
                      <h1 class="heading mb-4" style="margin-top: 80px; color: white; font-size: 70px;">God Consciousness</h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
    

        <section class="site-section bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="block-36">
                    <h3 class="block-36-heading">About's Links</h3>
                    <ul> 
                      <li className={aboutKey===1 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(1)}}>Introduction</a></li>
                      <li className={aboutKey===2 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(2)}}>Ms. Dimple Anil</a></li>
                    </ul>
                  </div>
                </div>
                { aboutKey === 1 ? <Introduction /> : aboutKey === 2 ? <AboutDimpleAnil /> : '' } 
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    )
}