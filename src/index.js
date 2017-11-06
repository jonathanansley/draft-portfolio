// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//

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
	document.getElementById('root')
	// document.getElementById('app')
);

// registerServiceWorker();
