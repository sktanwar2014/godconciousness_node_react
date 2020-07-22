import React, { Fragment } from 'react';


export default function Footer({contact, footerData, socialLinks }){
  return(
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <h3 class="heading">About</h3>
            <div class="row">
              <div class="col-md-12">
              <p className="text-justify color-white">
                {footerData.content}
              </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-1 mb-5 mb-lg-0">
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <h3 class="heading">Quick Links</h3>
            <div class="row">
              <div class="col-md-6">
                <ul class="list-unstyled">
                  <li><a href="/About">Introduction</a></li>
                  <li><a href="/Miracle">Miracles</a></li>
                  <li><a href="/Obe">OBE's Ministry</a></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled">
                  <li><a href="/DailyPrayer">Prayers</a></li>
                  <li><a href="/Event">Events</a></li>
                  <li><a href="/Contact">Contact</a></li>
                </ul>
              </div>              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <h3 class="heading">Contact Information</h3>
            <div class="block-23">
              <ul>
                <li><span class="icon ion-android-pin"></span><span class="text">{ contact.address }</span></li>
                <li><span class="icon ion-ios-telephone"></span><span class="text">{contact.mobile}</span></li>
                <li><span class="icon ion-android-mail"></span><span class="text">{ contact.email}</span></li>
                <li><span class="icon ion-link"></span>
                  <p>
                    <a target="_blank" href= {socialLinks[0].link} class="fa fa-facebook p-2"></a>
                    <a target="_blank" href= {socialLinks[1].link} class="fa fa-instagram p-2"></a>
                    <a target="_blank" href= {socialLinks[2].link} class="fa fa-youtube p-2"></a>
                  </p>
                </li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}  