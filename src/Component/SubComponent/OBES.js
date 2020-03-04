import React, { Component, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import FullContentViewDialog from './FullContentViewDialog';
let contentArray = [
  { content : "Dear AllSharing my Out of Body Experience. I would like to share something peculiar.&nbsp;It has been 10 days and every night I seem to be getting similar visions.&nbsp;I see myself on the surface of a sea, standing without any support.&nbsp;There I notice a figure that seems to be 3 in 1.&nbsp; The first figure is a very tall person who is dressed as a saint, has peculiarly long feet and fair skin, who I now recollect to have seen a couple of times.&nbsp;Second is my maternal Grandmother (Naani). The&nbsp; Third is someone who I recall to be tall and thin with grey eyes. From 3 THEY merge into ONE. And now My Nani starts talking to me.&nbsp;SHE says, “Just look at the amount of ABUNDANCE that is here. It belongs to you. Take your share and go. Come, bring your buckets and fill it.”I pick up a bucket next to me and bend down to fill it with sea water- my share of abundance. As I look into the bucket, expecting water to collect in it, I notice something very different. It was being filled with STARS instead.&nbsp;There was one thing SHE kept repeating, “Take YOUR share. Don’t get swayed by what is in other’s bucket.&nbsp;There is ENOUGH for each one in this UNIVERSE. WE have&nbsp; ample to give you all individually. Come and take your own!”SHE went on to explain, “What do WE mean by ‘Another’s bucket ’? It means, don’t see what others have and thereby want it for yourself just because they have it. If others have a better life, don’t resort to jealousy and crave theirs. Dont&nbsp; say that you want what they have.&nbsp;DESIRE, Want, Ask anything, everything that you need because you feel for it. You really really want it for yourself... it could be more money, better relationships, good health, a better job, children having a great life, travel, jewels, clothes, food ..... anything!!!FOCUS on what You WANT and WHAT makes You HAPPY. DO NOT FEEL SAD. Don’t Ask out of ANXIETY, FEAR, LACK, PAUCITY.. FEEL GOOD and ASK.&nbsp; THE&nbsp; INTENT behind your Want or Desire -must be KIND, GOOD and RIGHT .&nbsp;Take your share of HAPPINESS; we have STARS for you too."},
];
export default function OBES()  {
  const [showContentDialog, setShowContentDialog] = useState(false);
  const [dialogContent, setDialogContent]  = useState(false);

  const handleDialogeOpen = (objectIndex) => {
    setDialogContent(contentArray[objectIndex].content);
    setShowContentDialog(true);
   }

    return(
      <div>
        <Header/>
        <div className="container-fluid" style={{padding: '0px!important'}}>
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
                  { contentArray.map((data, index) => {
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
        
  
