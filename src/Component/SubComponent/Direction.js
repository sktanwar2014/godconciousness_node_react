
import React, { useState,Fragment } from 'react';
import Header from './Header';
import Footer from './Footer'
import FullContentViewDialog from './FullContentViewDialog.js';
let contentArray = [
  { 
    id: 'miracle-1',
    title: 'William Shakespeare',
    content : "O Lord that lends me life, lend me a heart replete with thankfulness.",
    imageName: 'img_1.jpg'
  },
  { 
    id: 'miracle-2',
    title: 'Robert Louis Stevenson',
    content : "Keep your eyes open to your mercies. The man who forgets to be thankful has fallen asleep in life.",
    imageName: 'img_2.jpg'
  },
  { 
    id: 'miracle-3',
    title: 'Jefferson Bethke',
    content : "Thankfulness is the quickest path to joy for give me this life.",
    imageName: 'img_3.jpg',
  },  
];
export default function Direction (){ 
   const [showContentDialog, setShowContentDialog] = useState(false);
   const [dialogContent, setDialogContent]  = useState(false);

   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(contentArray[objectIndex].content);
    setShowContentDialog(true);
   }
        return(
              <div>
                     <Header />
                     <section className="site-hero overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'Url(images/D.jpg)' , backgroundsize: 'cover' , height: '260px', backgroundposition: '0% -18.1875px'}}>
            <div class="container">
              <div class="row align-items-center justify-content-center site-hero-inner">
                <div class="col-md-8 text-center">
                  <div class="mb-5 element-animate fadeInUp element-animated">
                    {/* <div class="block-17">
                      <h1 class="heading mb-4" style="margin-top: 80px; color: white; font-size: 70px;">God Consciousness</h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="site-section">
            <div class="container">
              <div class="row">
                
              {contentArray.map((data, index) => {
                return(
              <div class="col-md-6 col-lg-4 mb-5">
                <div class="block-20">
                  <figure style={{width: '100%;'}}>
                    <a href="blog-single.html">
                    <img src={"images/" + data.imageName} alt="Image placeholder" className="img-fluid" />
                    </a>
                  </figure>
                  <div className="text text-center">
                          <h3 className="heading"><a href="">{data.title}</a></h3>
                          <p style={{textAlign:'justify'}}>{(data.content).substring(0,50) + '...'}</p>
                          <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
                        </div>
                  </div>
                  </div>
                    )
                  })}
                  
                      </div>
                      </div>
                   </section>
      {/* <section className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2 className="heading">Direction's</h2>
            </div>
          </div>
        </div>      
      </div>
      <div className="block-13">
        <div className="nonloop-block-13 owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2540px', paddingLeft: '250px'}}>
              {contentArray.map((data, index) => {
                return(
                  <div className="owl-item active" style={{width: '353.333px', marginRight: '20px'}}>
                    <div className="item">
                      <div className="block-20">
                        <figure>
                          <a href="#"><img src={"images/" + data.imageName} alt="Image placeholder" className="img-fluid" /></a>
                        </figure>
                      
                      </div>
                    </div>
                  </div>  
                )
              })}
                            
            </div>
          </div>  
        </div>
      </div>
    </section>  */} 
    {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }
    <Footer/>
    </div>
        )
    }
