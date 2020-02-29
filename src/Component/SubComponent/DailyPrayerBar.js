import React, { Component,Fragment } from 'react';



export default class DailyPrayerBar extends Component {
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return(
            <Fragment>
                <section class="block-42 overlap">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12 d-lg-flex">              
                            <div class="block-42-text">
                                <div class="block-42-label">Today Prayer's:</div>
                                <div class="block-42-title mx-2"><a href="#"><p style={{fontSize:'10px', fontWeight:'bolder'}}>I Ask You My Divine To Guide Me At Each Step.I Ask You My Lord To Help Me Live Each Moment With Complete Consciousness.Thank You My Lord ,Thank You My Divine.</p></a></div>
                                
                            </div>
                            <div class="block-42-icons ml-auto">
                                <a href="#" class="fa fa-video-camera pl-0"></a>
                        <a>
                                
                                   <span onClick={this.playAudio} className="fa fa-headphones"></span>
                                          
                             <audio className="audio-element">
                               if (this.playAudio) {
                                      <source src="audio\01 - Pyaar Tenu Karda Gabru - DownloadMing.SE.mp3"></source>      
                               }
                              else{
                                  console.log("this.pauseAudio")
                              }
                            </audio> 
                        </a>
                                <a href="#" class="fa fa-cloud-download"></a>
                                <a href="#" class="fa fa-book"></a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment> 
        )
    }
}