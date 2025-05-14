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
	
};

export default Home;