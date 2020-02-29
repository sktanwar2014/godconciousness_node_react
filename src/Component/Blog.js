import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';

export default class Blog extends Component {
    render() {
      return(
          <div className="wrap">
        
            <Header />
            <section  data-stellar-background-ratio="0.5" style= {{backgroundImage: 'URL(images/blog.jpeg)', backgroundSize:'cover', height:'340px'}}>
                   <div class="container">
                      <div class="row align-items-center justify-content-center site-hero-inner">
                        <div class="col-md-8 text-center">
                         <div class="mb-5 element-animate fadeInUp element-animated">
                         <div class="col-md-8 text-center">  
                  <h1 class="heading mb-4" style={{marginTop:'100px', color:'white', fontSize:'70px', fontWeight:'lighter'}}>Blog's</h1>
                </div>
                        </div>
                      </div>
                     </div>
                     
                   </div> 
            </section>
                     
                     <div>
                     <h6 style={{textAlign:'center', padding:'5px 5px 5px 5px'}}>Blogs Coming Soon</h6>
                     </div>

            <Footer />
          </div>  
            )
           }
          }  