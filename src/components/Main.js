import React, { Component } from 'react';
import NavbarComponent from './Children/Header';
import Home from './Children/Home';
import About from './Children/About';
import Skills from './Children/Skills';
import Portfolio from './Children/Portfolio'
import { Route } from 'react-router-dom';
import Footer from './Children/Footer';

class Main extends React.Component{
	render(){
		return(

			<div className='root'>
				<NavbarComponent/>
				<Route exact path='/' component={ Home }/>
				<Route path='/about' component={ About }/>
				<Route path='/skills' component={ Skills }/>
				<Route path='/portfolio' component={ Portfolio }/>
				<Footer/>
			</div>
		);
	}
}

export default Main;
