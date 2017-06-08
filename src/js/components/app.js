import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';
import Template from './app-template';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// const Links = () => (
//
// );
const App = () => (
  <Router>
    <div>
      <Template>
        <Route exact path="/" component={Catalog}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/item/:item" component={CatalogDetail}/>
      </Template>
    </div>

  </Router>
);
//<Route exact path="/" component={Template} />
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
