import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	//App with Router is wrapped by BrowserRouter as Router
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
