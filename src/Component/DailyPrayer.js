import React, { Component, useState,useEffect } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import FullContentViewDialog from './SubComponent/FullContentViewDialog';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';
import { makeStyles } from '@material-ui/core/styles';
import {getDate} from '../lib/datetime.js';

import FetchAPI from '../api/APIs.js' 

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
});


export default function DailyPrayer() {
  
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



  
  
  const classes = useStyles();
    // let aboutKey = 1;
    const [showContentDialog, setShowContentDialog] = useState(false);
    const [dialogContent, setDialogContent]  = useState(false);    
    const [aboutKey, setAboutKey] = useState(1);
    const [prayerList, setTabRelatedList] = useState([]);
    const [date, setDate] = useState(new Date());

    const handleDate = (date) => {
      setDate(date);
      fetchPrayers(date);
    }
 

   
   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(prayerList[objectIndex].prayer);
    setShowContentDialog(true);
   }
  
   
  //   const fetchprayer = async (date) => {
  //     try{
  //       const result = await FetchAPI.getTabRelatedList({type: 'Prayers'});
  //       // const result = await FetchAPI.getprayersList({date: getDate(date)});
  //       setTabRelatedList(result.result);
  //       console.log(result);
  //     }catch(e){
  //       console.log('Error...',e);
  //     }
  //   }
   
  //   useEffect(() => {
  //     fetchprayer(new Date());
  //    },[]);
   
  //   const handleActiveDeactive = async (data) => {
  //     console.log('handleActiveDeactive',data)
  //     try{
  //       const result = await FetchAPI.changeState({date: 'date'});
  //       setTabRelatedList(result.resultList);
  //        //console.log('date',date)
  //     }catch(e){
  //       console.log('Error...',e);
  //     }
  //   }

     
      return(
        <div className="wrap">        
          <Header />
          <div className="" style={{padding: '0px!important'}}>
  <img src="images/GC/P.jpg" alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />
</div>
    

        <section class="site-section bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="block-36">
                    <h3 class="block-36-heading">Prayer's Year's</h3>
                    {/* <div style={{color:'#6c5b7b', textAlign:'center'}}/\> */}
         <center>  
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  
    <DatePicker 
      autoOk
      variant="static"
      value={date}
      onChange={handleDate}
     
    />
  </MuiPickersUtilsProvider>
       </center>

            
              
                  </div>
                </div>
                <div class="col-md-8 pl-md-5">
                <div class="section-heading">
                   <h2 class="heading">Latest Prayer's</h2>
                </div>
                { prayerList.map((data, index) => {
                          return(
  <div class="block-44 d-flex mb-3">
  <div class="block-44-image"><img src={"images/image_tall_1.jpg" }alt="Image placeholder"/></div>
  <div class="block-44-text">
  <h3 class="block-44-heading" style={{color:'#6c5b7b',textAlign:'justify',fontSize:'18px',lineHeight:'25px'}}><a>{(data.prayer).substring(0,110) + '...'}</a></h3>
  <div class="block-44-meta">{"Posted on " + data.content}</div>
  <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
  </div>
</div>
                        )
                })
              }
              {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }



<div class="site-section">
<div class="section-heading">
<h2 class="heading">Popular Prayer's</h2>
</div>
{ Prayers.map((data, index) => {
                        return(
<div class="block-44 d-flex mb-3">
<div class="block-44-image"><img src={"images/image_tall_1.jpg" }alt="Image placeholder"/></div>
<div class="block-44-text">
<h3 class="block-44-heading"style={{color:'#6c5b7b',textAlign:'justify',fontSize:'18px',lineHeight:'25px'}}><a>{(data.content).substring(0,110) + '...'}</a></h3>
<div class="block-44-meta">{"Posted on " + data.created_at}</div>
<p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
</div>
</div>
                        )
})
}
{showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }




</div>
</div>
                {/* { aboutKey === 1 ? <Introduction /> : aboutKey === 2 ? <AboutDimpleAnil /> : '' }  */}
              </div>
            </div>
          </section>
            


        <Footer/>
      </div>
    )
}