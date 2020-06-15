import React, { Component,Fragment,  useEffect, useState } from 'react';

import FetchAPI from '../../api/APIs';
import { API_URL } from '../../api/config/Constants';


export default function AboutGC(props){

  const [AboutGC, setAboutGC] = useState([]);
  
  const fetchAboutGC = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'AboutGC'});
      setAboutGC(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchAboutGC();
  },[]);


  
        return(
            <Fragment>           
                <section class="site-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 order-md-2">
                                <div class="block-16">
                                    <figure>
                                        <img src="images\GC\Aunty pics - corrected 02croped corrected.jpg" alt="Image placeholder" class="img-fluid img-shadow"/>
                                        <a href="http://godsconsciousness.com/lib/gods.mp4" class="play-button popup-vimeo"><span class="ion-ios-play"></span></a>
                                    </figure>
                                </div>
                            </div>
                            {(AboutGC.length > 0 ? AboutGC : []).map((data) => {
                                return(
                            <div class="col-md-6 order-md-1">
                                <div class="block-15">
                                    <div class="heading">
                                        <h2>{data.title}</h2>
                                    </div>
                                    
                                    <div class="text mb-5">
                                        <p class="mb-4" style={{textAlign:'justify'}}>
                                        {data.content}
                                             </p>
                                    </div>
                                </div>
                            </div>
                             )
                            })}                        
                        </div>
                    </div>
                </section>
            </Fragment> 
        )
    }
