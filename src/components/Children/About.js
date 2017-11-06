import React from 'react';

const About = (props) => {
	return(
		<div id="about">
			<p id="about-me-title" className="animated fadeInDown center-text">
				About Me
			</p>
			<div>
				<img id="about-portrait" src="/images/me.jpg" alt="picture of Jonathan Ansley"/>
			</div>
			<div>
				<div id="about-me-content">
					<p className="open-statement">
						text from LinkedIn
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;
