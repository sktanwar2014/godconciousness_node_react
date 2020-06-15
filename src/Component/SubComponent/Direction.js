
import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'
import FullContentViewDialog from './FullContentViewDialog.js';
import FetchAPI from '../../api/APIs'

export default function Direction(props){

  const [Direction, setDirection] = useState([]);
  
  const fetchDirection = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'Directions'});
      setDirection(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchDirection();
  },[]);

   const [showContentDialog, setShowContentDialog] = useState(false);
   const [dialogContent, setDialogContent]  = useState(false);

   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(Direction[objectIndex].content);
    setShowContentDialog(true);
   }
        return(
              <div>
                     <Header />
                     <div className="" style={{padding: '0px!important'}}>
  <img src="images/D.jpg" alt="" className="img-responsive" style={{width: '100%', height: '350px'}} />
</div>
          <section class="site-section">
            <div class="container">
              <div class="row">
                
              {Direction.map((data, index) => {
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
      
    {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }
    <Footer/>
    </div>
        )
    }
