import React, { useState,Fragment,useEffect } from 'react';
import FullContentViewDialog from './FullContentViewDialog.js';
import FetchAPI from '../../api/APIs';



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




      <div>
        <section className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className="heading">Miracles</h2>
                </div>
              </div>
            </div>      
          </div>
        <div className="block-13" style={{marginLeft:'20px'}}>
          <div className="nonloop-block-13 owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <section class="site-section"style={{padding: '0px'}}>
                <div class="container"><div class="row">
                  {
                    Miracle.map((data, index) => {
                      return(
                        <div class="col-md-6 col-lg-4 mb-5">
                          <div class="block-20">
                            <figure style={{width: '100%'}}>
                              <a href="blog-single.html">
                                <img src={"images/" + data.imageName} alt="Image placeholder" class="img-fluid"/>
                              </a>
                            </figure>
                          <div class="text text-center">
                            <h3 class="heading">
                      <a href="#">{data.title}</a>
                            </h3>
                            <div class="meta mb-3">
                              <div>
                                {/* <a href="#"> */}
                                  {/* <span class="fa fa-calendar"></span> May 29, 2018</a> */}
                              </div>
                              <div>
                              {/* <a href="#">
                              <span class="fa fa-user"></span> Admin</a> */}
                              </div>
                            <div>
                              {/* <a href="#">
                              <span class="fa fa-comment"></span> 19</a> */}
                            </div>
                            </div>
                      <p style={{textAlign:'justify'}}>{(data.content).substring(0,110) + '...'}</p>
                                <p>
                                  <a href="" data-toggle="modal" data-target="#exampleModalLong"  onClick = {(e)=>{ handleDialogeOpen(index)}}>Read More</a>
                                </p>
                            </div>
                            </div>
                        </div>
                      )
                    })
                  }                                                                                         
       </div>
      </div>
    </section>
           
          </div>  
        </div>
      </div>
    </section> 
    {showContentDialog ? <FullContentViewDialog title={"Miracles"} content={dialogContent} /> : null }
    </div>
        )
    }
