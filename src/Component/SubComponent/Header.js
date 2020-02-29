import React, { Component,Fragment } from 'react';
// import logoImage from '../../../public/images/pic.png';


export default class Header extends Component {
    render() {
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
                    <a className="navbar-brand absolute" href="/" > <img src='images/pic.png' width="50" height="50"></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" style={{marginRight:'50px'}}>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown" style={{marginRight:'50px'}}>
                            <a className="nav-link" href="About" id="dropdown04" >About</a>
                            {/* <div className="dropdown-menu" aria-labelledby="dropdown04">
                            <a className="dropdown-item" href="introduction">Introduction</a>
                            <a className="dropdown-item" href="AboutAnilDimple">Ms.Dimple Anil</a>
                            
                            </div> */}
                        </li>
                        <li className="nav-item dropdown" style={{marginRight:'50px'}}>
                            <a className="nav-link dropdown-toggle" href="sermon.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Prayers</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown05">
                            <a className="dropdown-item" href="DailyPrayer">Daily Prayer</a>
                            <a className="dropdown-item" href="Direction">Direction</a>
                            <a className="dropdown-item" href="OBES">Obe's</a>
                            
                            </div>
                        </li>
                        <li className="nav-item" style={{marginRight:'50px'}}>
                            <a className="nav-link" href="Miracle">Miracles</a>
                        </li>
                        <li className="nav-item" style={{marginRight:'50px'}}>
                            <a className="nav-link" href="Blog">Blogs</a>
                        </li>
                        <li className="nav-item" style={{marginRight:'50px'}}>
                            <a className="nav-link" href="Contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </header>   
            </Fragment> 
        )
    }
}