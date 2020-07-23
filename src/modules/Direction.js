import React, {Fragment, useEffect, useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';

// Components
import FullContentViewDialog from './Components/FullContentViewDialog.js';
 
//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';
import Loader from '../common/FallbackLoader.js';

export default function Direction(props) {

  
  const [showContentDialog, setShowContentDialog] = useState(false);
  const [dialogContent, setDialogContent]  = useState('');

  const [direction, setDirection] = useState([]);
  
  const [pageCount, setPageCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPageData();
  },[]);

  const fetchPageData = async ( pageNo = 1 ) => {
    setIsLoading(true);
    try{
      const result = await FetchAPI.fetchPageData({
        page: 'Direction',
        pageNo: pageNo,
      });
      setIsLoading(false);
      setPageCount(result.counts);
      setDirection(result.data);
    }catch(e){
      console.log('Error...', e);
    }
  }
  
  const handlePagination = (event, page) => {
		setPageNo(page);
    fetchPageData(page);  
	}
  
  const handleDialogeOpen = (objectIndex) => {
    setDialogContent({content: direction[objectIndex], title: 'Direction'});
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
           {(direction.length > 0 ? direction: []).map((data, index) => {
             return(
              <div class="col-md-6 col-lg-4 mb-5">
                <div class="block-20">
                  <figure>
                    <img src={FTP_URL + '/api/images?path=Direction/' + data.image_name}  class="img-fluid img-box" />
                  </figure>
                  <div class="text text-center">
                    {/* <h3 class="heading">{data.title}</h3>
                    <p>{`"` +data.content + `"`}</p> */}
                    <h3 class="heading">{ data.title.length > 15 ? ((data.title).substring(0,15) + `...`) : data.title}</h3>
                    <p>{ data.content.length > 70 ? ((data.content).substring(0,70) + '...') : data.content}</p>
                    <p><a style={{cursor: 'pointer'}} onClick = {(e)=>{ handleDialogeOpen(index)}}>Read More</a></p>
                  </div>
                </div>
              </div>  
             )
           })}                
        </div> 
        <div class="row"  style={{ justifyContent: 'center'}}>
          <a href="#top"><Pagination count={Math.ceil(pageCount/9)} page={pageNo} showFirstButton showLastButton onChange={handlePagination} /> </a>
        </div>
        
      </div>
    </section>
    {isLoading === true ? <Loader /> : null}
    {showContentDialog ? <FullContentViewDialog show={showContentDialog} handleClose = {handleDialogClose}  data={dialogContent} /> : null }
    </Fragment>
  )
}