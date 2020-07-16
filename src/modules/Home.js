import React, {Fragment, useEffect, useState} from 'react';


// Components
import FullContentViewDialog from './Components/FullContentViewDialog.js';
import {getDateInDDMMYYYY} from '../lib/datetime.js';

import DailyPrayerBar from '../Component/SubComponent/DailyPrayerBar.js';
// import AboutGC from './SubComponent/AboutGC.js';
import Miracles from '../Component/SubComponent/Miracles.js';
import Events from '../Component/SubComponent/LatestEvent.js';
// import LatestEvent from './SubComponent/LatestEvent.js';
// import Insta from './SubComponent/Insta.js';
// import Footer from './SubComponent/Footer.js';

//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';

export default function Home(props) {

  
  const [showContentDialog, setShowContentDialog] = useState(false);
  const [dialogContent, setDialogContent]  = useState('');



  const [about, setAbout] = useState({id:'', content: '', image_name: '', link: ''});
  const [miracles, setMiracles] = useState([]);
  const [events, setEvents] = useState([]);
  const [prayer, setPrayer] = useState({id:'', title: '', content: '', image_name: '', link: ''});

  useEffect(() => {
    fetchHomePageData();
  },[]);

  const fetchHomePageData = async () => {
    try{
      const result = await FetchAPI.fetchHomePageData({}); 
      setAbout(result.about[0]);
      setMiracles(result.miracles);
      setEvents(result.events);
      setPrayer(result.prayer[0]);
    }catch(e){
      console.log('Error...', e);
    }
  }

  
  const handleDialogeOpen = (objectIndex, type) => {
    if(type === 'Miracle'){
      setDialogContent({content: miracles[objectIndex].content, title: type});
    }else if(type === 'Event'){
      setDialogContent({content: events[objectIndex].content, title: type});
    }
    setShowContentDialog(true);
  }

  const handleDialogClose = () => {
    setShowContentDialog(false);
  }

  return(
    <Fragment>
      <section class="block-42 overlap">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-lg-flex">
                
                <div class="block-42-text">
                  <div class="block-42-label">Today's Prayer:</div>
                  <div class="block-42-title mx-2"> 
                    <strong> {prayer.content} </strong>
                  </div>
                  {/* <div class="block-42-meta">Posted on June 28, 2018, <strong>Pastor John Smith</strong> </div> */}
                </div>
                {/* <div class="block-42-icons ml-auto">
                  <a href="#" class="fa fa-video-camera pl-0"></a>
                  <a href="#" class="fa fa-headphones"></a>
                  <a href="#" class="fa fa-cloud-download"></a>
                  <a href="#" class="fa fa-book"></a>
                </div> */}
              
            </div>
          </div>
        </div>
      </section>
      <section class="site-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
              <div class="block-16">
                <figure>
                  <img src={FTP_URL + '/api/images?path=AboutWelcomeMessage/' + about.image_name}  alt="Image placeholder" class="img-fluid img-shadow" />
                  <a href={about.link} target="_blank"  class="play-button popup-vimeo"><span class="ion-ios-play"></span></a>
                </figure>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <div class="block-15">
                <div class="heading">
                  <h2>Welcome To God Consciousness </h2>
                </div>
                <div class="text mb-6">
                  <p class="mb-4 text-justify"> { about.content} </p> 
                  {/* <p class="text-black">By:  <strong>Gregg Smith</strong></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="site-section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2 class="heading">Miracles</h2>
              </div>
            </div>
          </div>
         <div class="row">
           {(miracles.length > 0 ? miracles: []).map((data, index) => {
             return(
              <div class="col-md-6 col-lg-4 mb-5">
                <div class="block-20">
                  <figure>
                    <a href="#"><img src={FTP_URL + '/api/images?path=Miracle/' + data.image_name}  class="img-fluid" /></a>
                  </figure>
                  <div class="text text-center">
                    <h3 class="heading"><a href="#">{data.title}</a></h3>
                    <p>{(data.content).substring(0,110) + '...'}</p>
                    <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index, 'Miracle')}}>Read More</a></p>
                  </div>
                </div>
              </div>  
             )
           })}                
        </div> 
      </div>
    </section>
    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading mb-5">
              <h2 class="heading">Latest Events</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {(events.length > 0 ? events: []).map((data, index) => {
              return(
                <div class="col-md-6 col-lg-6 mb-5">
                  <div class="block-44 d-flex mb-3">
                    <div class="block-44-image">
                      <img src={FTP_URL + '/api/images?path=Event/' + data.image_name}  alt="Image placeholder" />
                    </div>
                    <div class="block-44-text">
                      <h3 class="block-44-heading">
                        <a > {data.title} </a>
                      </h3>
                      <div class="block-44-meta">{ `Event on ` + getDateInDDMMYYYY(data.date) }</div>
                      <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index, 'Event')}}>Read More</a></p>
                    </div>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
    {showContentDialog ? <FullContentViewDialog show={showContentDialog} handleClose = {handleDialogClose}  data={dialogContent} /> : null }
    </Fragment>
  )
}