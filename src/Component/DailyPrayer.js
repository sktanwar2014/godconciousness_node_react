import React, { Component, useState,useEffect } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import FullContentViewDialog from './SubComponent/FullContentViewDialog';
import Direction from './SubComponent/Direction.js';
import OBES from './SubComponent/OBES.js';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';
import { makeStyles } from '@material-ui/core/styles';
import FetchAPI from '../api/APIs';
import {getDate} from '../lib/datetime.js';

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

// pick a date util library

//import MuiPickersUtilsProvider from 'MuiPickersUtilsProvider';
// let contentArray = [
//   {content : "Me And My Family Are In Bliss Today.We Are Together And Happy,We Are In Complete Gratitude Thank You Divine ,Thank You Universe ,Thank You Divine.",image:"image_tall_1.jpg"},
//   {content : "My Lord,My Power Envelope Me And My Family In Golden Ball Of Divine Light Of Complete Protection.Thank You My Lord ,Thank You My Power.",image:"image_tall_2.jpg"},
//   {content : "I Receive Showers And Showers Of Happiness And Bliss Now.I Am Blessed And Filled With Blessings Today.Thank You Universe ,Thank You Divine Thank You Universe.",image:"image_tall_3.jpg"},
//   {content : "I Ask For Divine Wisdom My Lord So That I Live Each Moment With Deep Consciousness.Thank You Divine Thank You Universe,Thank You Divine",image:"image_tall_1.jpg"},
// ];
// let Arr = [
//   {content: "I Am Blessed Today ,I Am Ready For A Miracle Today I Am In Receiving Mode Today Because I Am Sowing Consciously Conscientiously And Carefully.Thank You My Lord,Thank You My Divine,Thank You My Lord.",imageName:"image_tall_1.jpg"},
//   {content: "Mangal Hi Mangal Hum Sab Ka Mangal Kar Do Ji Dukh Takleef Kasht Intezaar Losses Sab Har Lo Ji Shukrana Shukrana Shukrana Meray Malik.",imageName:"image_tall_2.jpg"},
//   {content: "Me And My Family Are Blessed We Are Healthy,We Are In Bliss.We Are Financial Magnets.Thank You My Lord,Thank You My Divine,Thank You My Lord.",imageName:"image_tall_3.jpg"},
//   {content: "My Lord Fill Me With Positivity And Complete Well Being.Thank You My Lord Thank You My Lord ,Thank You My Lord.",imageName:"image_tall_1.jpg"},
//   {content: "I Am Blessed Today ,I Am Ready For A Miracle Today I Am In Receiving Mode Today Because I Am Sowing Consciously Conscientiously And Carefully.Thank You My Lord,Thank You My Divine,Thank You My Lord.",imageName:"image_tall_2.jpg"},
//   {content: "I Ask For Divine Wisdom My Lord So That I Live Each Moment With Deep Consciousness.Thank You Divine Thank You Universe,Thank You Divine.",imageName:"image_tall_3.jpg"},
// ];
export default function DailyPrayer() {
  const classes = useStyles();
    // let aboutKey = 1;
    const [showContentDialog, setShowContentDialog] = useState(false);
    const [dialogContent, setDialogContent]  = useState(false);    
    const [aboutKey, setAboutKey] = useState(1);
    const [prayerList, setprayerList] = useState([]);
    const [date, setDate] = useState(new Date());

    const handleDate = (date) => {
      setDate(date);
      fetchprayer(date);
    }
 

   
   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(prayerList[objectIndex].prayer);
    setShowContentDialog(true);
   }
  
   
    const fetchprayer = async (date) => {
      try{
        const result = await FetchAPI.getprayersList({date: getDate(date)});
        setprayerList(result.result);
        console.log(result);
      }catch(e){
        console.log('Error...',e);
      }
    }
   
    useEffect(() => {
      fetchprayer(new Date());
     },[]);
   
    const handleActiveDeactive = async (data) => {
      console.log('handleActiveDeactive',data)
      try{
        const result = await FetchAPI.changeState({date: 'date'});
        setprayerList(result.resultList);
         //console.log('date',date)
      }catch(e){
        console.log('Error...',e);
      }
    }

     
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

                      {/* <div>
                    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                      <DatePicker 
                        autoOk
                        variant="static"
                        value={date}
                        onChange={handleDate}
                        />
                    </MuiPickersUtilsProvider>
                    </div> */}
                    {/* <ul> 
                      <li className={aboutKey===1 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(1)}}>2020</a></li>
                      <li className={aboutKey===2 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(2)}}>2019</a></li>
                      <li className={aboutKey===3 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(3)}}>2018</a></li>
                      <li className={aboutKey===4 ? 'active' : ''}><a href='' onClick = {(e)=>{e.preventDefault(); setAboutKey(4)}}>2017</a></li>
                    </ul> */}
                 
  {/* <DatePicker
        autoOk
        variant="static"
         openTo="year"
         value={date}
         onChange={changeDate}
      /> */}
              
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
  <div class="block-44-meta">{"Posted on " + data.created_at}</div>
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
{ prayerList.map((data, index) => {
                        return(
<div class="block-44 d-flex mb-3">
<div class="block-44-image"><img src={"images/image_tall_1.jpg" }alt="Image placeholder"/></div>
<div class="block-44-text">
<h3 class="block-44-heading"style={{color:'#6c5b7b',textAlign:'justify',fontSize:'18px',lineHeight:'25px'}}><a>{(data.prayer).substring(0,110) + '...'}</a></h3>
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