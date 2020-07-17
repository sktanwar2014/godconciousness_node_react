import React, {Fragment, useEffect, useState} from 'react';


//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';

export default function OBE(props) {

  const [obe, setObe] = useState({id:'', content: '', image_name: '', link: ''});
  

  useEffect(() => {
    fetchPageData();
  },[]);

  const fetchPageData = async () => {
    try{
      const result = await FetchAPI.fetchPageData({page: 'OBE'}); 
      setObe(result.data[0]);
    }catch(e){
      console.log('Error...', e);
    }
  }

    return(
    <Fragment>
      <section class="site-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
              <div class="block-16">
                <figure>
                  <img src={FTP_URL + '/api/images?path=OBE/' + obe.image_name}  alt="Image placeholder" class="img-fluid img-shadow" />
                  <a href={obe.link} target="_blank"  class="play-button popup-vimeo"><span class="ion-ios-play"></span></a>
                </figure>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <div class="block-15">
                <div class="heading">
                  <h2>OBE's </h2>
                </div>
                <div class="text mb-6">
                  <p class="mb-4 text-justify"> { obe.content} </p> 
                  {/* <p class="text-black">By:  <strong>Gregg Smith</strong></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}