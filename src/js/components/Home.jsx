import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("secondary")
	const [amarillo, setAmarillo] = useState("secondary")
	const [verde, setVerde] = useState("secondary")

	const prenderRojo = () => {
		setRojo("danger")
		setAmarillo("secondary")
		setVerde("secondary")
	}
	const prenderAmarillo = () => {
		setAmarillo("warning")
		setVerde("secondary")
		setRojo("secondary")
	}
	const prenderVerde = () => {
		setVerde("success")
		setRojo("secondary")
		setAmarillo("secondary")

	}
	return (
		<div className="container text-center">
			<div className={`bg-${rojo} rounded-circle mt-1`} style={{ width: "100px", height: "100px" }} onClick={prenderRojo}></div>
			<div className={`bg-${amarillo} rounded-circle mt-1`} style={{ width: "100px", height: "100px" }} onClick={prenderAmarillo}></div>
			<div className={`bg-${verde} rounded-circle mt-1`} style={{ width: "100px", height: "100px" }} onClick={prenderVerde}></div>


		</div>
	);
};

export default Home;