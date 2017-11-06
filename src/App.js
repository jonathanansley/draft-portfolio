import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';

// import registerServiceWorker from './registerServiceWorker';
//
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
	<HashRouter>
		<Main/>
	</HashRouter>),
	document.getElementById('app')
);

// registerServiceWorker();
