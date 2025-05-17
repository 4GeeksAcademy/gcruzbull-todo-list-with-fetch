import React, { useState } from "react";
import { Todo } from "./Todo";

// index.css'
import '../../styles/index.css'			
// con el primer .. salgo de components, quedando en js, 
// y con el segundo .. salgo de js para quedar en src, lugar donde esta styles. Luego indico el resto de la ruta.

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="bg-light">
				<h1 className="display-4 mt-5 text-center text-muted mb-3" >todos</h1>
				<div className="conteiner">
					<div className="row justify-content-center">
						<div className="col-6">
							<div className="card m-5 mt-3">
								<div className="card-body">
									<Todo/>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
		</>
	);
	
};

export default Home;

// style={{ fontWeight: 100 }}