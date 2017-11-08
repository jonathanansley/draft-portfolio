import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';
import { HashRouter } from 'react-router-dom';
import Main from './components/main';

// import registerServiceWorker from './registerServiceWorker';
//
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
	<HashRouter>
		<Main/>
	</HashRouter>),
	document.getElementById('root')
	// document.getElementById('app')
);

// registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
