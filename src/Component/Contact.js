import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';

export default class Contact extends Component {
    render() {
      return(
          <div className="wrap">
        
            <Header />
            <section data-stellar-background-ratio="0.5" style= {{backgroundImage: 'URL(images/contact.jpeg)', backgroundSize:'cover', height:'340px'}}>
            <div class="container">
                <div class="row align-items-center justify-content-center site-hero-inner">
                     <div class="col-md-8 text-center">
                       <div class="mb-5 element-animate fadeInUp element-animated">
                       <div class="col-md-8 text-center">  
                  <h1 class="heading mb-4" style={{marginTop:'100px', color:'white',fontWeight:'lighter',fontSize:'70px'}}>Contact US</h1>
                </div>                  
                        </div>
                      </div>
                    </div>
            </div>  

          </section>
          <section class="site-section bg-light">
<div class="container">
<div class="row">
<div class="col-md-8 pr-md-5">
<form action="#" method="post">
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
<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
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

<div>
  
  <div id="map" style={{position: 'relative', overflow: 'hidden'}}>
    <div style={{height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)'}}>
      <div className="gm-style" style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px'}}>
        <div tabIndex={0} style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y'}}>
          <div style={{zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}>
            <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 100, width: '100%'}}>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}>
                <div style={{position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)'}}>
                  <div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-512px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-512px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-768px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-768px', top: '0px', width: '256px', height: '256px'}}> 
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '-768px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '768px', top: '-256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                  <div style={{position: 'absolute', left: '768px', top: '0px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '768px', top: '256px', width: '256px', height: '256px'}}>
                    <div style={{width: '256px', height: '256px'}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 101, width: '100%'}}>
            </div>
            <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 102, width: '100%'}}>
            </div>
            <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 103, width: '100%'}}>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: -1}}>
                <div style={{position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)'}}>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-768px', top: '256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-768px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-768px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '768px', top: '-256px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '768px', top: '0px'}}>
                  </div>
                  <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '768px', top: '256px'}}>
                  </div>
                </div>
              </div>
            </div>
            <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}>
              <div style={{position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)'}}>
                <div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i48!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=113519" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=109304" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=47119" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i48!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=16891" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=12676" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i48!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=79076" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i39!3i48!4i256!2m3!1e0!2sm!3i500216446!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=85376" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i39!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=74861" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position:  'absolute' , left: '-512px' , top: '-256px' , width: '256px' , height:  'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i35!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=81562" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position:'absolute' , left: '-512px' , top: '256px' , width: '256px' , height:  'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i35!3i49!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=21106" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i35!3i48!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=51334" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i49!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=117734" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i49!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=83291" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i49!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=48848" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '768px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i40!3i49!4i256!2m3!1e0!2sm!3i500210647!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=5583" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '768px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i40!3i48!4i256!2m3!1e0!2sm!3i500213770!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=85095" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '768px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i40!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=76993" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-768px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i34!3i47!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=116005" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-768px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i34!3i48!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=85777" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i39!3i49!4i256!2m3!1e0!2sm!3i500212654!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=61640" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
                <div style={{position: 'absolute', left: '-768px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}>
                  <img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i34!3i49!4i256!2m3!1e0!2sm!3i500216470!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=55549" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} />
                </div>
              </div>
            </div>
          </div>
          <div className="gm-style-pbc" style={{zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', opacity: 0}}>
            <p className="gm-style-pbt" />
          </div>
          <div style={{zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}>
            <div style={{zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 104, width: '100%'}}>
              </div>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 105, width: '100%'}}>
              </div>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 106, width: '100%'}}>
              </div>
              <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 107, width: '100%'}}>
              </div>
            </div>
          </div>
        </div>
        <iframe aria-hidden="true" frameBorder={0} style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none'}} />
        <div style={{marginLeft: '5px', marginRight: '5px', zIndex: 1000000, position: 'absolute', left: '0px', bottom: '0px'}}>
          <a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=40.69847,-73.951442&z=7&t=m&hl=en-US&gl=US&mapclient=apiv3" title="Open this area in Google Maps (opens a new window)" style={{position: 'static', overflow: 'visible', float: 'none', display: 'inline'}}>
            <div style={{width: '66px', height: '26px', cursor: 'pointer'}}><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', width: '66px', height: '26px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px'}} />
            </div>
          </a>
        </div>
        <div style={{backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: '300px', height: '180px', position: 'absolute', left: '550px', top: '160px'}}>
          <div style={{padding: '0px 0px 10px', fontSize: '16px', boxSizing: 'border-box'}}>Map Data</div>
          <div style={{fontSize: '13px'}}>Map data ©2020 Google</div><button draggable="false" title="Close" aria-label="Close" type="button" className="gm-ui-hover-effect" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', top: '0px', right: '0px', width: '37px', height: '37px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{pointerEvents: 'none', display: 'block', width: '13px', height: '13px', margin: '12px'}} /></button></div><div className="gmnoprint" style={{zIndex: 1000001, position: 'absolute', right: '71px', bottom: '0px', width: '121px'}}><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a style={{textDecoration: 'none', cursor: 'pointer', display: 'none'}}>Map Data</a><span>Map data ©2020 Google</span></div></div></div><div className="gmnoscreen" style={{position: 'absolute', right: '0px', bottom: '0px'}}><div style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '11px', color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)'}}>Map data ©2020 Google</div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{zIndex: 1000001, userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '0px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener" style={{textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)'}}>Terms of Use</a></div></div><button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" className="gm-control-active gm-fullscreen-control" style={{background: 'none rgb(255, 255, 255)', border: '0px', margin: '10px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: '2px', height: '40px', width: '40px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', overflow: 'hidden', top: '0px', right: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px', display: 'none', position: 'absolute', right: '0px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" href="https://www.google.com/maps/@40.6984703,-73.9514422,7z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative'}}>Report a map error</a></div></div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={40} controlheight={81} style={{margin: '10px', userSelect: 'none', position: 'absolute', bottom: '95px', right: '40px'}}><div className="gmnoprint" controlwidth={40} controlheight={81} style={{position: 'absolute', left: '0px', top: '0px'}}><div draggable="false" style={{userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: '40px', height: '81px'}}><button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: '0px'}} /><button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button></div></div><div className="gmnoprint" controlwidth={40} controlheight={40} style={{display: 'none', position: 'absolute'}}><div style={{width: '40px', height: '40px'}}><button draggable="false" title="Rotate map 90 degrees" aria-label="Rotate map 90 degrees" type="button" className="gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'none', border: '0px', margin: '0px 0px 32px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><button draggable="false" title="Tilt map" aria-label="Tilt map" type="button" className="gm-tilt gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /></button></div></div></div></div></div></div>
</div>

            <Footer />
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&amp;sensor=false"type="text/javascript"></script>
            <script src="js/google-map.js" type="text/javascript"></script>
            <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13" type="text/javascript"></script>
            
            
          </div>  
            
            )
           }
          }  
         