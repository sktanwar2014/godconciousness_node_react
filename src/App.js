import React, {Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


import PageLoader from './Component/Utils/Loader.js';

import Home from './Component/Home';
import About from './Component/About.js';
import Miracle from './Component/Miracle.js';
import Blog from './Component/Blog.js';
import Contact from './Component/Contact.js';
import Introduction from './Component/SubComponent/Introduction'

import AboutDimpleAnil from './Component/SubComponent/AboutDimpleAnil'
import Dailyprayer from './Component/DailyPrayer'
import Direction from './Component/SubComponent/Direction';
import OBES from './Component/SubComponent/OBES';
function App() {
  return (
     <Router>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />            
            <Route path='/Miracle' component={Miracle} />
            <Route path='/Blog' component={Blog} />
            <Route path='/Contact' component={Contact} />
            <Route path="/Introduction" component={Introduction} />
            <Route path="/AboutDimpleAnil" component={AboutDimpleAnil} />          
            <Route path="/Dailyprayer" component={Dailyprayer} />
            <Route path="/Direction" component={Direction} />
            <Route path="/OBES" component={OBES} />
          </Switch>
        </Suspense>
          </Router>
  );
}

export default App;
