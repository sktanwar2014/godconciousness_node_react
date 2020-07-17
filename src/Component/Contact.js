import React, { Component, useState, useEffect } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import APIs from '../api/APIs.js'


export default function Contact() {
  const [contact, setContact] = useState({});
  // useEffect(() => {
  //   getContactInfo();
  // },[]);
  
  // const getContactInfo = async() => {
  //   try{
  //     const result = await APIs.getContactInfo({});
  //     setContact(result.result[0]);  
        
  //   }catch(e){
  //     console.log("error...",e);
  //   }
  // }

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
                       
                              <h3 class="heading mb-5">Contact Information</h3>
                              
                    <ul>
                           <li><span class="icon ion-android-pin"></span><span class="text"> {contact.address} </span></li>
                           <li><a href="#"><span class="icon ion-ios-telephone"></span><span class="text">{contact.mobile}</span></a></li>
                           <li><a href="#"><span class="icon ion-android-mail"></span><span class="text">{contact.email}</span></a></li>
                     </ul>
                           
                                        </div>
                                       </div>
                                    </div>
                                  </section>

        <section className="footer-bottom" id="contact" style={{backgroundColor: '#C5E4E7'}}>
          <div className="address_mail_footer_grids">
            <iframe src="https://maps.google.com/maps?q=73%20Rama%20Lane%2C%20Talab%20Tillo%2C%20Jammu%20Tawi%2C%20Pin%20180005%20&t=&z=13&ie=UTF8&iwloc=&output=embed"   style={{width:'100%',height:'500px'}} />
          
          </div>
        </section>

            <Footer />            
          </div>  
    )
}  
         