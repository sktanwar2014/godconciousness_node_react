import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';

export default class Blog extends Component {
    render() {
      return(
          <div className="wrap">
        
            <Header />
            <div className="" style={{padding: '0px!important'}}>
  <img src="images/blog.jpeg" alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />
</div>
                     
                     <div>
                      
                     <h6 style={{textAlign:'center', padding:'80px 5px 80px 5px'}}>Blogs Coming Soon</h6>
                     </div>

            <Footer />
          </div>  
            )
           }
          }  