import React, {Fragment, useEffect, useState} from 'react';

// Components
import FullContentViewDialog from './Components/FullContentViewDialog.js';
import {getDateInDDMMYYYY} from '../lib/datetime.js';

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
    fetchPageData();
  },[]);

  const fetchPageData = async () => {
    try{
      const result = await FetchAPI.fetchPageData({page: 'Home'}); 
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
      setDialogContent({content: miracles[objectIndex], title: type});
    }else if(type === 'Event'){
      setDialogContent({content: events[objectIndex], title: type});
    }
    setShowContentDialog(true);
  }

  const handleDialogClose = () => {
    setShowContentDialog(false);
  }

  
  const handleSlide = (name) => {
     console.log( name)
  }
  

  return(
    <Fragment>
      <section class="block-42 overlap">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-lg-flex">
                
                <div class="block-42-text">
                  <div class="block-42-label" style={{fontWeight: '400'}}>Today's Prayer:</div>
                  <div class="block-42-title mx-2"> 
                    <blockquote className="blockqoute-home">
                      <p>{prayer.content}</p>
                    </blockquote>
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
                    <a href="#"><img src={FTP_URL + '/api/images?path=Miracle/' + data.image_name}  class="img-fluid"  /></a>
                  </figure>
                  <div class="text text-center">
                    <h3 class="heading">{ data.title.length > 22 ? ((data.title).substring(0,18) + `...`) : data.title}</h3>
                    <p>{ data.content.length > 90 ? ((data.content).substring(0,90) + '...') : data.content}</p>
                    <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index, 'Miracle')}}>Read More</a></p>
                  </div>
                </div>
              </div>  
             )
           })}                
        </div> 
      </div>
      {/* <div class="block-13">
        <div class="nonloop-block-13 owl-carousel owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '3200px', paddingLeft: '150px', paddingRight: '150px'}}>
              {(miracles.length > 0 ? miracles: []).map((data, index) => {
                return(
                  <div class={index === 0 || index === 1 ? "owl-item active" : "owl-item" } style={{width: '343.5px', marginRight: '20px'}}>
                    <div class="item">
                      <div class="block-20">
                        <figure>
                          <a href="#">
                            <img src = {FTP_URL + '/api/images?path=Miracle/' + data.image_name} alt="Image placeholder" class="img-fluid" />
                          </a>
                        </figure>
                        <div class="text text-center">
                          <h3 class="heading"><a href="#">{data.title}</a></h3>
                          <p>{(data.content).substring(0,110) + '...'}</p>
                          <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index, 'Miracle')}}>Read More</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )})}
            </div>
          </div>
          <div class="owl-nav">
            <button role="presentation" class="owl-prev" onClick={() => {handleSlide('prev')}}>
              <span class="ion-chevron-left"  ></span>
            </button>
            <button role="presentation" class="owl-next" onClick={() => {handleSlide('next')}}>
              <span class="ion-chevron-right"></span>
            </button>
          </div>
          <div class="owl-dots">
            <button class="owl-dot active"><span></span></button>
            <button class="owl-dot"><span></span></button>
            <button class="owl-dot"><span></span></button>
          </div>
        </div> 
      </div> */}
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
                <div class="col-md-6 col-lg-4 mb-5">
                  <div class="block-20">
                    <figure>
                      <img src={FTP_URL + '/api/images?path=Event/' + data.image_name}  class="img-fluid" />
                    </figure>
                    <div class="text text-center">
                      <h3 class="heading">{data.title}</h3>
                      <div class="meta mb-3">
                        <div><span class="fa fa-calendar"></span>{'  ' + getDateInDDMMYYYY(data.date)}</div>
                        <div><span class="fa fa-clock-o"></span> {'  ' +  data.time} </div>
                      </div>
                      <p><a style={{cursor: 'pointer'}} onClick =  {(e)=>{ handleDialogeOpen(index, 'Event')}}><strong>Read More</strong></a></p>
                    </div>
                  </div>
                </div>
              )
          })}
          {events.length === 0 && <p className="p-center">Coming soon</p>}
        </div>
      </div>
    </section>
    {showContentDialog ? <FullContentViewDialog show={showContentDialog} handleClose = {handleDialogClose}  data={dialogContent} /> : null }
    </Fragment>
  )
}