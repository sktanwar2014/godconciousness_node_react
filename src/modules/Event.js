import React, {Fragment, useEffect, useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';

// Components
import FullContentViewDialog from './Components/FullContentViewDialog.js';
import {getDateInDDMMYYYY} from '../lib/datetime.js';
//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';
import Loader from '../common/FallbackLoader.js';

export default function Event(props) {

  
  const [showContentDialog, setShowContentDialog] = useState(false);
  const [dialogContent, setDialogContent]  = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [event, setEvent] = useState([]);
  
  const [pageCount, setPageCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  
  useEffect(() => {
    fetchPageData();
  },[]);

  const fetchPageData = async ( pageNo = 1 ) => {
    setIsLoading(true);
    try{
      const result = await FetchAPI.fetchPageData({
        page: 'Event',
        pageNo: pageNo,
      });
      setIsLoading(false);
      setPageCount(result.counts);
      setEvent(result.data);
    }catch(e){
      console.log('Error...', e);
    }
  }
  
  const handlePagination = (event, page) => {
		setPageNo(page);
    fetchPageData(page); 
	}
  
  const handleDialogeOpen = (objectIndex) => {
    setDialogContent({content: event[objectIndex], title: 'Event'});
    setShowContentDialog(true);
  }

  const handleDialogClose = () => {
    setShowContentDialog(false);
  }

  return(
    <Fragment>
      <section class="site-section bg-light">
        <div class="container">       
         <div class="row" id="top">
           {(event.length > 0 ? event: []).map((data, index) => {
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
                      {/* <br />
                      <div><span class="fa fa-location-arrow"></span>{' ' + data.location + 'das ljfldas fd;lsaj;fldsj fljsda ;fldjs fjds;a fjdsnfk nasvklnkldhnklsnfsdkl fbnsdlafbjas dasnl'} </div> */}
                    </div>
                    {/* <p>{(data.content).substring(0,110) + '...'}</p> */}
                    <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index)}}><strong>Read More</strong></a></p>
                  </div>
                </div>
              </div>
             )
           })}                
        </div> 
        <div class="row"  style={{ justifyContent: 'center'}}>
          <a href="#top"><Pagination count={Math.ceil(pageCount/9)} page={pageNo} showFirstButton showLastButton onChange={handlePagination} /></a>
        </div>
        
      </div>
    </section>
    {isLoading === true ? <Loader /> : null}
    {showContentDialog ? <FullContentViewDialog show={showContentDialog} handleClose = {handleDialogClose}  data={dialogContent} /> : null }
    </Fragment>
  )
}