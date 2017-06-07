import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import Template from './app-template';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <Route path="/" component={Template}>

      </Route>
			<Route component={Catalog}/>
			<Route component={Cart}/>

    </div>
  </Router>
);

// const App = () => (
// 		<Router>
//     <Switch>
// 			<Route exact path="/" component={Home}/>
// 			<Route path="/about" component={About}/>
//     </Switch>
// 	</Router>
//   );

const Home = (props) => {
  console.log(props);
  return <h1>Home</h1>;
}
// const About = () => <h1>About</h1>;
export default App;
//
