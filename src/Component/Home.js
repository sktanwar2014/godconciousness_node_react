import React, { Component } from 'react';

export default class Home extends Component {

    render() {
            return(
          <div className="site-wrap">
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div> 
  <div className="site-navbar-wrap js-site-navbar bg-white">
    <div className="container-fluid" style={{backgroundColor: '#565853'}}>
      <div className="row col-md-12">
        <ul className="ml-auto topbar socialicons" style={{color: 'white', marginBottom: '0.2em', marginTop: '0.4em'}}>
          <a style={{}} href="https://www.facebook.com/groups/429971720508946/" className="pb-2 pr-2 pl-0"><span className="icon-facebook" style={{fontSize: '20px', marginLeft: '15px', color: 'white'}} /></a>
          <a style={{marginRight: '0.7em'}} href="https://www.instagram.com/godsconsciousness_gc" className="p-2" target="_blank"><span className="icon-instagram" style={{fontSize: '20px', marginLeft: '-6px', color: 'white'}} /></a>
          <a style={{}} href="https://www.youtube.com/channel/UCKeVsVRweYnZFBEZUSsE47A" className>
            <span className="icon-youtube" style={{fontSize: '20px', marginLeft: '-6px', color: 'white'}} /> 
          </a>
        </ul>
      </div>
    </div>
    <div class="container" style={{paddingleft: '3rem'}}>
          <div class="site-navbar bg-light">
            <div class="">
              <div class="row align-items-center">
                <div class="col-2">
                  <h2 class="mb-0 site-logo god"></h2>
                </div>
                <div class="col-10">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                    <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li class="active">
                        <a href="<?php echo Theme::siteUrl(); ?>">HOME</a>
                      </li>
                      <li><a href="sermons.html">Sermons</a></li>
                      <li class="has-children">
                        <a class="pr-4" data-toggle="collapse" data-target="#collapseItem0">ABOUT</a>
                        <ul class="dropdown">
                          <li><a href="intro/">INTRODUCTION</a></li>
                          <li><a href="dimple-anil/">MS.DIMPLE ANIL</a></li>
                           <li><a href="they.html">They</a></li>
                         <li class="has-children">
                            <a href="beliefs.html">Churches</a>
                            <ul class="dropdown">
                              <li><a href="beliefs.html">America</a></li>
                              <li><a href="beliefs.html">Europe</a></li>
                              <li><a href="beliefs.html">Asia</a></li>
                              <li><a href="beliefs.html">Africa</a></li>
                              
                            </ul>
                          </li> -->

                        </ul>
                      </li>

                      <li class="has-children">
                        <a class="pr-4" data-toggle="collapse" data-target="#collapseItem1">PRAYERS</a>
                        <ul class="dropdown">
                          <li><a href="prayers/">DAILY PRAYER</a></li>
                          <li><a href="direction/">DIRECTION</a></li>
                          <li><a href="obe/">OBE’s</a></li>
                           <li><a href="dailyprayer/">Daily prayers</a></li>
                        </ul>
                      </li>  
                      <li><a href="events/">MIRACLES</a></li>
                      <li><a href="blogs/">BLOGS</a></li>
                      <li><a class="pr-3" href="contact/">CONTACT US</a></li>
                      
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>
          </div>    
        </div>
      </div>    
  </div>

            )
          }
      }