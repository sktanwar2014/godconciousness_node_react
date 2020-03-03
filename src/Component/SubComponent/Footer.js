import React, { Component,Fragment } from 'react';


export default class Footer extends Component {
    render() {
        return(

            <footer class="site-footer">
            <div class="container">
        
        <div class="row">
          <div class="col-md-5">
            
            <h6 class="footer-heading mb-4 text-white" style={{paddingtop: '28px',marginBottom:'500px',  fontWeight: 'bold' , fontsize:'10px'}}>ABOUT</h6>
            <p style={{color:'white'}}>Prayers are SIMPLE and DOABLE and have all those lead a more peaceful, successful, glorious, magnificent,
		healthy,
		prosperous and abundant life.</p>
            <p ><a  class="footer-heading mb-4 text-white">Read More</a></p>
          </div>
          
              <div class="col-md-4 col-md-offset-1">
            <div class="row">
               <div class="col-md-6 col-md-offset-1" style={{paddingtop:'3px'}}>
                <center><h6 class="footer-heading mb-4 text-white text-left">QUICK MENU</h6></center>
                <div class="row">
              <div class="col-6 col-md-6">
                  <ul class="list-unstyled">
                    <li><a href="About">Introduction</a></li><li>
                    </li><li><a href="Miracle">Miracles</a></li>
                    <li><a href="OBES">OBE'S</a></li>
                  </ul>
                </div>
              <div class="col-6 col-md-5">
                
                  <ul class="list-unstyled">
                    <li><a href="DailyPrayer">Prayers</a></li>
                    <li><a href="Blog">Blogs</a></li>
                    <li><a href="Contact">Contact</a></li>
                  </ul>
              </div>
              </div>
            </div>
              
            
            </div>
          </div>
         <div class="col-md-2 pt-3">
            <div class=""><h6 class="footer-heading mb-4 text-white text-left"> FOLLOW US</h6>
            </div>
            
            
            <a href="https://www.facebook.com/groups/429971720508946/" class="pb-2 pr-2 pl-0"><span class="fa fa-facebook" style={{fontsize: '20px'}}></span></a>
                  <a href="https://www.instagram.com/godsconsciousness_gc" class="p-2" style={{marginright:'-0.3em'}}><span class="fa fa-instagram" style={{marginleft: '-2px' , fontsize: '20px'}}></span></a>
                  <a href="https://www.youtube.com/channel/UCKeVsVRweYnZFBEZUSsE47A" class="p-2"><span class="fa fa-youtube" style={{marginleft: '12px' ,fontsize: '20px'}}></span></a>
          
                
           </div>
       </div>
     
      </div>
          </footer>
        )
        }
    }  