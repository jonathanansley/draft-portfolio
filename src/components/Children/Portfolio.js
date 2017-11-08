import React from 'react';

const Portfolio = (props) => {
	return(
		<div id="portfolio">

portfolio.js

			<p id="portfolio-title" className="animated fadeInDown center-text">Portfolio</p>

				<div id="port-group">

					<div className='row'>
						<div className="col-4">
							<h3 className='port-title'>ShoeMarket</h3>

							<div className="port-item">
								<a target='_blank' rel="noopener noreferrer" href="https://fierce-reef-37071.herokuapp.com/">
									<div id="port2">
									</div>
								</a>
							</div> 	{/* end of <div className="port-item"> */}

							<div className='port-desc'>
							<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/ShoeMarket'>Github Link</a>
								<p>
									Description: ShoeMarket helps sellers of athletic shoes manage the inventory, sales, and clients.
								</p>

							</div>

						</div>

				</div>
				{/* {* end of <div className='row'>} */}


					<div className='row'>
						<div className="col-4">
							<h3 className='port-title'>TrainTimes</h3>
							<div className="port-item">
								<a target='_blank' rel="noopener noreferrer" href="https://google.com/">
									<div id="port0">
									</div>
								</a>
							</div>

							<div className='port-desc'>
								<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/TrainTimes'>Github Link</a>
								<p>
									Description: TrainTimes incorporates Firebase to host arrival and departure data. The app  retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
								</p>
							</div>

						</div>

					</div>

				</div>

		</div>
	);
}

export default Portfolio;
