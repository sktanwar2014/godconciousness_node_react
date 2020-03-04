import React, { Component,Fragment, useState } from 'react';
import About from '../About';
// import logoImage from '../../../public/images/pic.png';


export default function Header() {
    const [tabs, setTabs] = useState('home');
    const handleTabs = (tabValue) => {
        setTabs(tabValue);
    }
   
        return(
            <Fragment>
                <div className="block-45">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-md-right">
                        <ul className="block-45-icons">
                        <li><a href="https://www.facebook.com/groups/429971720508946/"><span className="fa fa-facebook" /></a></li>
                        <li><a href="https://www.instagram.com/godsconsciousness_gc"><span className="fa fa-instagram" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCKeVsVRweYnZFBEZUSsE47A"><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <header role="banner">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <img src='images/pic.png' width="50" height="50" alt="" class="a"/>  
                    <div style={{fontSize:'25px',color:'#6c5b7b',fontWeight:'bold',marginLeft:'20px'}}>God Consciousness</div>  
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                        <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                            <ul className="navbar-nav ml-auto">
                            <li className={tabs === 'home' ? "nav-item active": 'nav-item'} style={{marginRight:'50px'}} >
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className={tabs === 'about' ? "nav-item active": 'nav-item'} style={{marginRight:'50px'}} >
                                <a className="nav-link" href="About">About  </a>
                            </li>
                            <li className= {tabs === 'prayers' ? "nav-item dropdown active": 'nav-item dropdown'}  style={{marginRight:'50px'}}>
                                <a className="nav-link dropdown-toggle" href="sermon.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Prayers</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown05">
                                    <a className="dropdown-item" href="/DailyPrayer">Daily Prayer</a>
                                    <a className="dropdown-item" href="/Direction">Direction</a>
                                    <a className="dropdown-item" href="/OBES">OBE</a>
                                </div>
                            </li>
                            <li className={tabs === 'miracles' ? "nav-item active": 'nav-item'}  style={{marginRight:'50px'}}>
                                <a className="nav-link" href="/Miracle">Miracles</a>
                            </li>
                            <li className={tabs === 'blogs' ? "nav-item active": 'nav-item'}  style={{marginRight:'50px'}}>
                                <a className="nav-link" href="/Blog">Blogs</a>
                            </li>
                            <li className={tabs === 'contact' ? "nav-item active": 'nav-item'}  style={{marginRight:'50px'}}>
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </header>   
            </Fragment> 
        )
}