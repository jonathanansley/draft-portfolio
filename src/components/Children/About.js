import React from 'react';

const About = (props) => {
	return(
		<div id="about">

about.js

			<p id="about-me-title" className="animated fadeInDown center-text">
				About Me
			</p>
			<div>
				// <img id="about-portrait" src="./imgs/headshot.jpg" alt="Jonathan Ansley"/>
				<img id="about-portrait" src="https://avatars0.githubusercontent.com/u/25236580?s=400&v=4" alt="Jonathan Ansley"/>

			</div>
			<div>
				<div id="about-me-content">
					<p className="open-statement">
						Software professional with 18 years of experience creating databases, writing software, trouble-shooting, and managing projects.

Have both a technical and a business background and can help your organization transform clunky systems into something you actually want to use.

Started working with computers when I was 12 years old, and I have changed with the technology. For now, I prefer web technologies on the back end or the full stack.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;
