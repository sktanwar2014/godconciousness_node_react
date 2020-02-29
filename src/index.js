import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Miracle from './Component/Miracle';
import Blog from './Component/Blog';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Contact from './Component/Contact';
import About from './Component/About';
import Introduction from './Component/SubComponent/Introduction'
//import Anil from './Component/SubComponent/AboutDimpleAnil'
import AboutDimpleAnil from './Component/SubComponent/AboutDimpleAnil'
import Dailyprayer from './Component/DailyPrayer'
import Direction from './Component/SubComponent/Direction';
import OBES from './Component/SubComponent/OBES';
//import Prayer from './Component/DailyPrayer';
import Home from './Component/Home';
//import * as serviceWorker from './serviceWorker';

// const routing = (
//     <Router>
//       <Switch>
//       <Route path="/About" component={About} />
//         <Route path="/Introduction" component={Introduction} />
//         <Route path="/AboutDimpleAnil" component={AboutDimpleAnil} />
      
//         <Route path="/Dailyprayer" component={Dailyprayer} />
//         <Route path="/Direction" component={Direction} />
//         <Route path="/OBES" component={OBES} />
//         <Route path="/Blog" component={Blog} />
//         <Route path="/Miracle" component={Miracle} />
//         <Route path="/Contact" component={Contact} />
//         <Route path="/" component={Home} />
      
//       </Switch>
//     </Router>
//   )
  // ReactDOM.render(routing, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
