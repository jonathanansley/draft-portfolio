import React from 'react';

const Footer = (props) => {
	return(

			<nav class="navbar navbar-default navbar-fixed-bottom">
				<div class="container">
					Copyright &copy; 2017 Jonathan Ansley

					<div className='footer'>

							      <ul class="list-unstyled">

							        <li>
							          <a href="https://www.linkedin.com/in/jonathanansley/" target="_blank" rel="noopener noreferrer">
													<img class='social' src='../src/imgs/linkedin.png' alt="Connect with me on LinkedIn"></img>
							          </a>
							        </li>

							        <li>
							          <a href="https://github.com/jonathanansley" target="_blank" rel="noopener noreferrer">
							            <img class='social' src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="Connect with me on GitHub"></img>
							          </a>
							        </li>

							      </ul>

					   </div>

				</div>
			</nav>

	);
}

export default Footer;
