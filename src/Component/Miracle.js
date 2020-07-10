import React, { Component, useState ,useEffect} from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import FullContentViewDialog from './SubComponent/FullContentViewDialog.js';

import FetchAPI from '.././api/APIs'


export default function Miracle(props){

  const [Miracle, setMiracle] = useState([]);
  
  const fetchMiracle = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'Miracles'});
      setMiracle(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchMiracle();
  },[]);


  const [showContentDialog, setShowContentDialog] = useState(false);
   const [dialogContent, setDialogContent]  = useState(false);

   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(Miracle[objectIndex].content);
    setShowContentDialog(true);
   }
         return(
          <div className="wrap">
        
            <Header />
            <div className="" style={{padding: '0px!important'}}>
            { Miracle.map((data, index) => {
                        return(
  <img src={"http://localhost:5001/api/images?path=images/" + data.image_name} alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />

  )
                      })
                    }
  </div>
          <section class="site-section">
                <div class="container">
                  <div class="row">
                 
                    { Miracle.map((data, index) => {
                        return(
                            
                          <div class="col-md-6 col-lg-4 mb-5">
                            
                            <div class="block-20">
                            
                              <figure style={{width:'100%'}}>
                                  <a href="blog-single.html"><img src={"http://localhost:5001/api/images?path=images/" + data.image_name}  alt="Image placeholder" class="img-fluid" /></a>
                              </figure>
                              <div class="text text-center">
                        <h3 class="heading"><a href="#">{data.title}</a></h3>
                                  {/* <div class="meta mb-3">
                                    <div><a href="#"><span class="fa fa-calendar"></span> May 29, 2018</a></div>
                                    <div><a href="#"><span class="fa fa-user"></span> Admin</a></div>
                                    <div><a href="#"><span class="fa fa-comment"></span> 19</a></div>
                                  </div> */}
                                  <p style={{textAlign:'justify'}}>{(data.content).substring(0,110) + '...'}</p>
                          <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }  
                      </div>
                  </div>
           </section>  
           {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }        
            <Footer/>
            {/* <StoryDialog /> */}
          </div>
      )
    }
  