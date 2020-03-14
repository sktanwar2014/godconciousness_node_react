import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import APIs from '../api/APIs.js'

export default class Contact extends Component {
  render() {
    const handleSendMail = async (e) => {
      e.preventDefault();
      try{
        const result = await APIs.sendMail({
          name: document.getElementById('name').value,
          phone: document.getElementById('phone').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
        });
        if(result.sent === true){          
          document.getElementById('name').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          alert('Mail sent successfully.');
        }
      }catch(e){
        console.log(e);
      }
    }

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
                     <form href='' onSubmit={(e)=>{handleSendMail(e)}}>
                           <div class="row">
                                <div class="col-md-4 form-group">
                                      <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control py-2" required/>
                                </div>
                               <div class="col-md-4 form-group">
                                  <label for="phone">Phone</label>
                                     <input type="number" id="phone" class="form-control py-2" required/>
                                </div>
                                 <div class="col-md-4 form-group">
                                      <label for="email">Email</label>
                                        <input type="email" id="email" class="form-control py-2" required/>
                                </div>
                            </div>
                         <div class="row">
                            <div class="col-md-12 form-group">
                                 <label for="message">Write Message</label>
                                   <textarea name="message" id="message" class="form-control py-2" cols="30" rows="8" required></textarea>
                            </div>
                        </div>
                          <div class="row">
                             <div class="col-md-6 form-group">
                             <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
                                {/* <button onClick={handleSendMail} value="Send Message" class="btn btn-primary py-3 px-5">Send Message</button> */}
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
          </div>  
    )
  }
}  
         