import React, { useState, useEffect, Fragment } from 'react';



import FetchAPI from '../api/APIs.js'


export default function Contact() {

  const [contact, setContact] = useState({});
  const [mapLink, setMapLink] = useState('');
  
  useEffect(() => {
    fetchPageData();
  },[]);

  const fetchPageData = async () => {
    try{
      const result = await FetchAPI.fetchPageData({page: 'Contact'});
      setContact(result.contact[0]);
      setMapLink(result.map[0].link);
    }catch(e){
      console.log('Error...', e);
    }
  }

  const handleSendMail = async (e) => {
    e.preventDefault();
    try{
      // const result = await FetchAPI.sendMail({
      //   name: document.getElementById('name').value,
      //   phone: document.getElementById('phone').value,
      //   email: document.getElementById('email').value,
      //   message: document.getElementById('message').value,
      // });
      // if(result.sent === true){
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      //   alert('Mail sent successfully.');
      // }
      
    }catch(e){
      console.log(e);
    }
  }
  
  return(
    <Fragment>
      <section class="site-section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-8 pr-md-5">
              <form onSubmit={handleSendMail}>
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
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <div class="block-23">
              <h3 class="heading mb-5">Contact Information</h3>
              <ul>
                <li><span class="icon ion-android-pin"></span><span class="text"> {contact.address} </span></li>
                <li><span class="icon ion-ios-telephone"></span><span class="text">{contact.mobile}</span></li>
                <li><span class="icon ion-android-mail"></span><span class="text">{contact.email}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer-bottom" id="contact" style={{backgroundColor: '#C5E4E7'}}>
      <div className="address_mail_footer_grids">
        <iframe src={ mapLink} style={{width:'100%',height:'500px'}} />
      </div>
    </section>
    </Fragment>
  )
}  
         