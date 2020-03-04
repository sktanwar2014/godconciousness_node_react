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
          <div class="container-fluid" style={{padding: '0px'}}>
             <img src="images/GC/flower.jpg" alt="" class="img-responsive" style={{width: '100%'}}/>
             </div>
    

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