import React from 'react';

const Portfolio = (props) => {
	return(
		<div id="portfolio">
			<p id="portfolio-title" className="animated fadeInDown center-text">Portfolio</p>
			<div id="port-group">
				<div className='row'>
				<div className="col-4">
					<h3 className='port-title'>item 1</h3>
					<div className="port-item">
						<a target='_blank' href="https://web address">
							<div id="port2">
							</div>
						</a>
					</div>


{/*

					    <NavDropdown eventKey={3} title="Portfolio Samples" id="basic-nav-dropdown">
					       <MenuItem href="/">TrainTimes</MenuItem>
					       <MenuItem href="/">ShoeMarket</MenuItem>
					       <MenuItem href="/">Sportify</MenuItem>
					    </NavDropdown> */}



					<div className='port-desc'>
						<p>
							description
						</p>
					</div>
				</div>
				</div>



				<div className='row'>
				<div className="col-4">
					<h3 className='port-title'>item 2</h3>
					<div className="port-item">
						<a target='_blank' href="https://google.com/">
							<div id="port0">
							</div>
						</a>
					</div>
					<div className='port-desc'>
						<a className='git-link' target='_blank' href='https://google.com'>Github Link</a>
						<p>
							description
						</p>
					</div>
				</div>
				</div>



				<div className='row'>
				<div className="col-4">
					<h3 className='port-title'>item 3</h3>
					<div className="port-item">
						<a target='_blank' href="https://google.com">
							<div id="port1">
							</div>
						</a>
					</div>

					<div className='port-desc'>
						<a className='git-link' target='_blank' href='https://google.com'>Github Link</a>
						<p>
							description
						</p>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
