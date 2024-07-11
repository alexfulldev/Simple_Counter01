import React from "react";
import { SimpleCounter } from "./simplecounter";
import { counter } from "@fortawesome/fontawesome-svg-core";

//include images into your bundle


//create your first component
const Home = () => {

	const one = 1;
	const two = 2;
	const three = 3;
	const four = 4;
	
	return(
		<SimpleCounter digitOne={one} digittwo={two} digitthree={three} digitfour={four} />
	);
}
		

export default Home;
