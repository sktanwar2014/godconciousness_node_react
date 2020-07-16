import React, {Suspense, lazy, useEffect, Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

//API
import fetchAPI from './api/APIs.js';

//Components
import FallbackLoader from './common/FallbackLoader.js';
import Header from './modules/partials/Header.js';
import Footer from './modules/partials/Footer.js';
import Banner from './modules/partials/Banner.js';

const Home = lazy(()=> import('./modules/Home.js'));
const About = lazy(()=> import('./modules/About.js'));
const Miracle = lazy(()=> import('./Component/Miracle.js'));
const Blog = lazy(()=> import('./Component/Blog.js'));
const Contact = lazy(()=> import('./Component/Contact.js'));
const Introduction = lazy(()=> import('./Component/SubComponent/Introduction'));
const AboutDimpleAnil = lazy(()=> import('./Component/SubComponent/AboutDimpleAnil'));
const Dailyprayer = lazy(()=> import('./Component/DailyPrayer'));
const Direction = lazy(()=> import('./Component/SubComponent/Direction'));
const OBES = lazy(()=> import('./Component/SubComponent/OBES'));


function App() {
  const [contact, setContact] = useState({id: '', email: '', address: '', mobile: ''});
  const [footerData, setFooterData] = useState({id: '', content: ''});
  const [socialLinks, setSocialLinks] = useState([{link: ''}, {link: ''}, {link: ''}]);

  useEffect(() => {
    fetchHeaderFooterContent();
  },[]);

  const fetchHeaderFooterContent = async () => {
    try{
      const result = await fetchAPI.fetchHeaderFooterContent({});
      setContact(result.contact[0]);
      setFooterData(result.footerAbout[0]);
      setSocialLinks(result.socialLinks);
    }catch(e){
      console.log("error...", e);
    }
  }

  return (
    <div className="wrap">
      <Header socialLinks= {socialLinks}  />
      <Banner />
          <Router>
              <Suspense fallback={<FallbackLoader />}>
                <Switch>
                  <Route exact path="/" render = { props => { return <Home {...props} /> }}  />
                  <Route path="/About" render = { props => { return <About {...props} /> }} />            
                  <Route path='/Miracle' render = { props => { return <Miracle {...props} /> }} />
                  <Route path='/Blog' render = { props => { return <Blog {...props} /> }} />
                  <Route path='/Contact' render = { props => { return <Contact {...props} /> }} />
                  <Route path="/Introduction" render = { props => { return <Introduction {...props} /> }} />
                  <Route path="/AboutDimpleAnil" render = { props => { return <AboutDimpleAnil {...props} /> }} />          
                  <Route path="/DailyPrayer" render = { props => { return <Dailyprayer {...props} /> }} />
                  <Route path="/Direction" render = { props => { return <Direction {...props} /> }} />
                  <Route path="/Obes" render = { props => { return <OBES {...props} /> }} />
                </Switch>
              </Suspense>
            </Router>
        <Footer contact = {contact} footerData = {footerData} socialLinks= {socialLinks} />
      </div>
  );
}

export default App;
