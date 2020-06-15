import React, { Component, useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import FullContentViewDialog from './FullContentViewDialog';
import FetchAPI from '../../api/APIs'

export default function OBEs(props){

  const [OBEs, setOBEs] = useState([]);
  
  const fetchOBEs = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'OBEs'});
      setOBEs(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchOBEs();
  },[]);

  const [showContentDialog, setShowContentDialog] = useState(false);
  const [dialogContent, setDialogContent]  = useState(false);

  const handleDialogeOpen = (objectIndex) => {
    setDialogContent(OBEs[objectIndex].content);
    setShowContentDialog(true);
   }

    return(
      <div>
        <Header/>
        <div className="" style={{padding: '0px!important'}}>
  <img src="images/obe.jpg" alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />
</div>
          <center>
  <div className="container">
    <div className="row">
      <div className="col-12">
       
        <h2 style={{paddingTop: '30px'}}>OBE'S</h2>
      </div>
      <div className="col-12">
        <div className="site-section block-20  bg-light">
          <div className="site-section">
            <div className="container">
              <div className="row py-5">
                {/*  data-aos="fade-right" */}
                <div className="col-md-6 mb-5 mb-md-0 aos-init">
                  <div className=" embed-responsive" style={{minHeight: '300px'}}>
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/O_u4TV5Typs" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  {/* <div class="img-border">
        <a href="{{siteUrl}}lib/gods.mp4" class="popup-vimeo image-play"> 
          <span
              class="icon-wrap"> <span class="icon icon-play"></span> </span> 
              <img
              src="{{siteUrl}}images/Aunty pics - corrected 02croped corrected.jpg" alt="" class="img-fluid"> </a>
        </div> */}
                </div>{/* data-aos="fade-left" */}
                <div className="col-md-5" style={{paddingLeft: '30px'}}>
                  {/* <h2 class="h2 mb-3">ABOUT GOD CONSCIOUSNESS</h2> */}
                  { OBEs.map((data, index) => {
                        return(
                  <p className="mb-4 text-justify" style={{fontSize: '0.8em'}}>
                    {(data.content).substring(0,500) + '...'}
                    <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
                  </p>
                    )
                  })
                }  
                 {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div></center>

  <Footer/>
</div>
      )
    }
        
  
