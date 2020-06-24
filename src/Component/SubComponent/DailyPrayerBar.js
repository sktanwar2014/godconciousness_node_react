import React, { Component,Fragment, useEffect, useState  } from 'react';

import FetchAPI from '../../api/APIs.js'


export default function DailyPrayerBar(props){

  const [Prayers, setPrayers] = useState([]);
  
  const fetchPrayers = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'Prayers'});
      setPrayers(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchPrayers();
  },[]);




        return(
            <Fragment>
                <section class="block-42 overlap">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12 d-lg-flex">              
                            <div class="block-42-text">
                                <div class="block-42-label" style={{paddingRight:'10px'}}>Today Prayer's:</div>
                                {(Prayers.length > 0 ? Prayers : []).map((data) => {
                                return(
                                
                                <div class="heading mb-4"><a href="#"><p style={{fontSize:'12px', fontWeight:'bold'}}>
                                    {data.content}
                                    </p>
                                    </a>
                                    </div>
                                )
                            })}  
                            </div>
                          
                        </div>
                        </div>
                        <div class="block-42-icons ml-auto text-center">
                                {/* <a href="#" class="fa fa-video-camera pl-0"></a> */}
                                {/* <a href="#"  className="fa fa-headphones"></a> */}
                                
                                   {/* <span onClick={this.playAudio} className="fa fa-headphones"></span>
                                           */}
                             {/* <audio className="audio-element">
                               if (this.playAudio) {
                                      <source src="audio\01 - Pyaar Tenu Karda Gabru - DownloadMing.SE.mp3"></source>      
                               }
                              else{
                                  console.log("this.pauseAudio")
                              }
                            </audio>  */}
                       
                                {/* <a href="#" class="fa fa-cloud-download"></a> */}
                                {/* <a href="#" class="fa fa-book"></a> */}
                            </div>
                            
                    </div>
                </section>
            </Fragment> 
        )
    }
