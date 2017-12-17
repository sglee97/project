import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //3가지의 기능을 꺼내온다.

import Login from './routes/Login';
import Company from './routes/Company';

class App extends React.Component {
     render(){
      return(
		  <Router>
		  	<div className="container">
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/company" component={Company}></Route>
					<Route path="/company/:id"></Route>
				</Switch>
			</div>
		  </Router>
      )
   }
}

export default App;

/*
 <Route path="/login" component={Login}></Route>
 <Route path="/company"></Route>
 <Route path="/company/:id"></Route>
 상세정도 id:고유키
*/