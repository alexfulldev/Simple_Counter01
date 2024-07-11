import React from "react";
import { SimpleCounter } from "./simplecounter";
import { counter } from "@fortawesome/fontawesome-svg-core";

//include images into your bundle


//create your first component
const Home = () => {
	return(
		<SimpleCounter digitOne={one} digittwo={two} digitthree={three} digitfour={four} />
	);
}
		

export default Home;
