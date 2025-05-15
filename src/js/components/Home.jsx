import React, { useState } from "react";
import { Todo } from "./Todo";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="bg-light">
				<h1 className="display-4 mt-5 text-center text-muted mb-3" >todos</h1>
				<div className="card m-5 mt-3">
					<div className="card-body">
						<Todo/>
					</div>
				</div>
			</div>
		</>
	);
	
};

export default Home;

// style={{ fontWeight: 100 }}