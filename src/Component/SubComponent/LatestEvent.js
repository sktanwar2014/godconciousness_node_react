import React, { useEffect, useState } from 'react';

import FetchAPI from '../../api/APIs';
import { API_URL } from '../../api/config/Constants';


export default function Events(props){

  const [EventsList, setEventsList] = useState([]);
  
  const fetchEvents = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'Events'});
      setEventsList(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchEvents();
  },[]);


  
        return(
            <div>
      <section className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2 className="heading">Latest Events</h2>
            </div>
          </div>
        </div>      
      </div>

      
      <div class="container">
        <div className="row">
          {(EventsList.length > 0 ? EventsList : []).map((data) => {
            return(
              <div className="col-md-6 mb-5">
              <div class="block-44 d-flex mb-3">
                <div class="block-44-image"><img src={"http://localhost:5001/api/images?path=images/" + data.image_name} alt="Image placeholder" /></div>
                <div class="block-44-text">
                  <h3 class="block-44-heading"><a href="#"> {data.title} </a></h3>
                  <div class="block-44-meta mb-2">{data.event_date}</div>
                  <p>    {data.content}  </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
              </div>
            )
          })}

         
        
  </div>
  </div>
  </section>
 </div>
  )
  } 
