import React, { useState } from "react";
import { Todo } from "./Todo";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<h1 className="display-4 text-muted mb-4" style={{ fontWeight: 100 }}>todos</h1>
				<Todo/>
			</div>
		
		</>
	);

		// <div className="d-flex flex-column vh-100 bg-light">
		// 	<div className="form-floating align-items-center justify-content-center">
		// 		<h1 className="text-center">todos</h1>
		// 		<input className="form-control m-5" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>
		// 		</input>
		// 	</div>
		// </div>
	
};

export default Home;