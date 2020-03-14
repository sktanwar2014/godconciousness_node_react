import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import {main} from './SubComponent/SEND-EMAIL';
export default class Contact extends Component {
   
  
  
  render() {
      return(
          <div className="wrap">
        
            <Header />
            <div className="" style={{padding: '0px!important'}}>
               <img src="images/contact.jpeg" alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />
            </div>
             <section class="site-section bg-light">
                 <div class="container">
                   <div class="row">
                     <div class="col-md-8 pr-md-5">
                       <form   method="post">
                           <div class="row">
                                <div class="col-md-4 form-group">
                                      <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control py-2"/>
                                </div>
                               <div class="col-md-4 form-group">
                                  <label for="phone">Phone</label>
                                     <input type="text" id="phone" class="form-control py-2"/>
                                </div>
                                 <div class="col-md-4 form-group">
                                      <label for="email">Email</label>
                                        <input type="email" id="email" class="form-control py-2"/>
                                </div>
                            </div>
                         <div class="row">
                            <div class="col-md-12 form-group">
                                 <label for="message">Write Message</label>
                                   <textarea name="message" id="message" class="form-control py-2" cols="30" rows="8"></textarea>
                            </div>
                        </div>
                          <div class="row">
                             <div class="col-md-6 form-group">
                                <input type="submit" onclick={main} value="Send Message" class="btn btn-primary py-3 px-5"/>
                              </div>
                          </div>
                      </form>
                 </div>
                   <div class="col-md-4">
                         <div class="block-23">
                              <h3 class="heading mb-5">Contact Information</h3>
                                    <ul>
                                      <li><span class="icon ion-android-pin"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                      <li><a href="#"><span class="icon ion-ios-telephone"></span><span class="text">+2 392 3929 210</span></a></li>
                                      <li><a href="#"><span class="icon ion-android-mail"></span><span class="text">info@yourdomain.com</span></a></li>
                                    </ul>
                                        </div>
                                       </div>
                                    </div>
                                </div>
                           </section>

                           <section className="footer-bottom" id="contact" style={{backgroundColor: '#C5E4E7'}}>
          <div className="address_mail_footer_grids">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5555388050793!2d144.7516093153163!3d-37.73010927976772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f50fa340f24b%3A0x4011fcd161b135c9!2s53%20Inglewood%20Dr%2C%20Burnside%20Heights%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sin!4v1576227983267!5m2!1sen!2sin"  style={{width:'100%',height:'500px'}} />
          </div>
        </section>

            <Footer />
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&amp;sensor=false"type="text/javascript"></script>
            <script src="js/google-map.js" type="text/javascript"></script>
            <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13" type="text/javascript"></script> */}
            
            
          </div>  
            
            )
           }
          }  
         