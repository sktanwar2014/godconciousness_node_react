import React, { Fragment, useState } from 'react';


export default function Header({socialLinks}) {
    return(
        <Fragment>
            <div class="block-45">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="block-45-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/About">About Us</a></li>
                                <li><a href="/Contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <ul className="block-45-icons">
                                <li><a target="_blank" href={socialLinks[0].link}><span className="fa fa-facebook" /></a></li>
                                <li><a target="_blank" href={socialLinks[1].link}><span className="fa fa-instagram" /></a></li>
                                <li><a target="_blank" href={socialLinks[2].link}><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header role="banner">
            
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand absolute" href="/">
                            <img src='static/images/gc-home.png' width="50" height="50" alt="" />
                            <span style={{marginLeft: '25px'}}>God Consciousness</span>
                            {/* <span class="fa fa-heart text-primary"></span>   */}
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
                            <ul className="navbar-nav ml-auto">
                                <li className = "nav-item pl-10 active" >
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className='nav-item pl-10'>
                                    <a className="nav-link" href="/About">About  </a>
                                </li>
                                <li className= 'nav-item pl-10 dropdown'>
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Prayers</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                                        <a className="dropdown-item" href="/DailyPrayer">Daily Prayer</a>
                                        <a className="dropdown-item" href="/Direction">Direction</a>
                                        <a className="dropdown-item" href="/Obe">OBE</a>
                                    </div>
                                </li>
                                <li className='nav-item pl-10'>
                                    <a className="nav-link" href="/Event">Events</a>
                                </li>
                                <li className='nav-item pl-10'>
                                    <a className="nav-link" href="/Miracle">Miracles</a>
                                </li>
                                <li className='nav-item pl-10'>
                                    <a className="nav-link" href="/Blog">Blog</a>
                                </li>
                                <li className='nav-item pl-10'>
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