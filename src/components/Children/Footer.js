import React from 'react';

const Footer = (props) => {
	return(
		<div className='footer'>
			<div className='foot-icon'>
				<a href='https://www.linkedin.com/in/jonathanansley/' target='_blank'>
					<i className=" fa-icon fa fa-linkedin-square" aria-hidden="true"></i>
				</a>
			</div>



			{/* 
			       <MenuItem eventKey="4.3">Resume</MenuItem>
			      //  Google document */}


			<div className='foot-icon'>
				<a href='https://github.com/jonathanansley' target='_blank'>
					<i className="fa-icon fa fa-github" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
}

export default Footer;
