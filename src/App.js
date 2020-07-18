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
const Contact = lazy(()=> import('./modules/Contact.js'));
const Miracle = lazy(()=> import('./modules/Miracle.js'));
const Direction = lazy(()=> import('./modules/Direction.js'));
const OBE = lazy(()=> import('./modules/OBE.js'));
const Blog = lazy(()=> import('./modules/Blog.js'));
const Event = lazy(()=> import('./modules/Event.js'));
const Prayer = lazy(()=> import('./modules/Prayer.js'));
const DailyPrayer = lazy(()=> import('./modules/DailyPrayer.js'));


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
                  <Route path='/Contact' render = { props => { return <Contact {...props} /> }} />                  
                  <Route path='/Miracle' render = { props => { return <Miracle {...props} /> }} />
                  <Route path="/Direction" render = { props => { return <Direction {...props} /> }} />
                  <Route path="/Obe" render = { props => { return <OBE {...props} /> }} />
                  <Route path='/Blog' render = { props => { return <Blog {...props} /> }} />
                  <Route path='/Event' render = { props => { return <Event {...props} /> }} />
                  <Route path='/Prayer' render = { props => { return <Prayer {...props} /> }} />
                  <Route path="/DailyPrayer" render = { props => { return <DailyPrayer {...props} /> }} />
                  
                  
                </Switch>
              </Suspense>
            </Router>
        <Footer contact = {contact} footerData = {footerData} socialLinks= {socialLinks} />
      </div>
  );
}

export default App;
