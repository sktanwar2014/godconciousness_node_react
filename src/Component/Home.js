import React, { Component } from 'react';
import Header from './SubComponent/Header.js';
import HomeBanner from './SubComponent/HomeBanner.js';
import DailyPrayerBar from './SubComponent/DailyPrayerBar.js';
import AboutGC from './SubComponent/AboutGC.js';
import Miracles from './SubComponent/Miracles.js';
import LatestEvent from './SubComponent/LatestEvent.js';
import Insta from './SubComponent/Insta.js';
import Footer from './SubComponent/Footer.js';


export default class Home extends Component {
  render() {
    return(
        <div className="wrap">
          <Insta />
        </div>
    )
  }
}