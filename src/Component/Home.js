import React from 'react'

const Home=()=>{
	return(
		<>
			<div className="home1">
				<img src="images/home7.jpg" className="home1" />
				
			</div>
			<div className="content">
				<div class="heading">
					<h2>Our Work</h2>
					<p>I will done some project develop any website with different language.</p>
				</div>
				<div className="work">
					<div className="workbox">
						<img src="images/home1.jpg" />
					</div>
					<div className="workbox">
						<img src="images/home2.jpg" />
					</div>
					<div className="workbox">
						<img src="images/home3.jpg" />
					</div>
					<br/>
					<div className="workbox">
						<img src="images/home2.jpg" />
					</div>
					<div className="workbox">
						<img src="images/home3.jpg" />
					</div>
					<div className="workbox">
						<img src="images/home1.jpg" />
					</div>

				</div>
				<br/>
				
			</div>
			<div className="content1">
				
				
				
					<div className="heading">
		              <div className="d-sm-flex justify-content-center justify-content-sm-between">
		                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021 <a href="#">vijay kasundra</a>. All rights reserved.</span>
		                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Resume Generator <i class="mdi mdi-heart text-danger"></i></span>
		              </div>
		            </div>
				
				<br/>
				<br/>
				<br/>
			</div>
		</>
	);

}
export default Home;