import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './HomePage';
import Product from './Product';
import RateDone from "./RateDone";

class App extends React.Component {
  render(){
    return(
      <Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Product" component={Product} />
          <Route path="/RateDone" component={RateDone} />
        </div>
      </Router>
    )
  }
}
export default App;