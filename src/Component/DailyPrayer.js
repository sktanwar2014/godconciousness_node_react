import React, { Component, useState,useEffect } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import FullContentViewDialog from './SubComponent/FullContentViewDialog';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';
import { makeStyles } from '@material-ui/core/styles';
import {getDate, getDateInDDMMYYYY} from '../lib/datetime.js';

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
  
  const classes = useStyles();
    const [showContentDialog, setShowContentDialog] = useState(false);
    const [dialogContent, setDialogContent]  = useState(false);    
    const [prayerList, setPrayerList] = useState([]);
    const [date, setDate] = useState(new Date());

    const handleDate = (date) => {
      setDate(date);
      fetchPrayer(date);
    }
 

   
   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(prayerList[objectIndex].prayer);
    setShowContentDialog(true);
   }
  
   
    const fetchPrayer = async (date) => {
      try{
        const result = await FetchAPI.getPrayerList({date: getDate(date)});
        setPrayerList(result.prayerList);
        console.log(result);
      }catch(e){
        console.log('Error...',e);
      }
    }
   
    useEffect(() => {
      fetchPrayer(new Date());
     },[]);
   

     
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
                    <h2 class="heading"> Prayer's</h2>
                  </div>
                  { prayerList.map((data, index) => {
                      return(
                        <div class="block-44 d-flex mb-3">
                         
                          <div class="block-44-text">
                            <h3 class="block-44-heading" style={{color:'#6c5b7b',textAlign:'justify',fontSize:'18px',lineHeight:'25px'}}>
                              <a>{(data.content).substring(0,110) + '...'}</a></h3>
                            <div class="block-44-meta">{"Posted on " + getDateInDDMMYYYY(data.date)}</div>
  <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
  </div>
</div>
                        )
                })
              }
              </div>
            </div>
            </div>
          </section>
        <Footer/>
        {showContentDialog ? <FullContentViewDialog title={" Prayer's"} content={dialogContent} /> : null }
      </div>
    )
}