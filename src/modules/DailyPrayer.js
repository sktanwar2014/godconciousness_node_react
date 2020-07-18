import React, {Fragment, useEffect, useState} from 'react';
import {isNullOrUndefined} from 'util';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// Components
import {getDate} from '../lib/datetime.js';
import Loader from '../common/FallbackLoader.js';

//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';

export default function DailyPrayer(props) {
  let id = (isNullOrUndefined(props.location.state) || props.location.state === "") 
           ? 0
           : (props.location.state);

  const [prayers, setPrayers] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPageData('Id', date);
  },[]);

  const fetchPageData = async (fetchBy, date) => {
    setIsLoading(true);
    try{
      const result = await FetchAPI.fetchPageData({
        page: 'DailyPrayer',
        id : id,
        fetchBy : fetchBy,
        date: getDate(date),
      });
      setPrayers(result.data);
      setIsLoading(false);
      if(!isNullOrUndefined(result.data[0].date) || result.data[0].date !== ""){
        setDate(getDate(result.data[0].date));
      }
    }catch(e){
      console.log('Error...', e);
    }
  }

  const handleDate = (date) => {
    setDate(date);
    fetchPageData('Date', date);
  }

  return(
    <Fragment>
    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div className="calendar-box">
              <div class="block-16">
                <div class="heading">
                  <p className="calendar-title">Prayer calendar</p>                  
                </div>
                <figure>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker 
                      autoOk
                      variant="static"
                      value={date}
                      onChange={handleDate}
                    />
                  </MuiPickersUtilsProvider>
                </figure>
              </div>
            </div>
          </div> 
          <div class="col-md-8">
            <blockquote>
              {(prayers.length > 0 ? prayers : []).map((prayer) => {
                return(
                  <Fragment>
                    <div class="col-md-12">
                      <div class="block-15">
                        <div class="heading" style={{maxWidth: 'fit-content'}}>
                          <h2 style={{ fontSize: '35px'}}>{prayer.title}</h2>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="block-16">
                        <figure>
                          <img src={FTP_URL + '/api/images?path=Prayer/' + prayer.image_name}  class="img-fluid img-shadow" />
                        </figure>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="block-15">
                        <div>
                          <p class="mb-4"> {prayer.content} </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </Fragment>
                )
              })}              
            </blockquote>
          </div>
        </div>
      </div>
    </section>  
    {isLoading === true ? <Loader /> : null}
  </Fragment>
  )
}