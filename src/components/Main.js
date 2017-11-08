// import React, { Component } from 'react';
import React from 'react';
import NavbarComponent from './children/header';
import Home from './children/home';
import About from './children/about';
import Skills from './children/skills';
import Portfolio from './children/portfolio'
import { Route } from 'react-router-dom';
import Footer from './children/footer';

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
