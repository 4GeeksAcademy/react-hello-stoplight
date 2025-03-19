import React, {useState} from "react";
//create your first component
const Home = () => {
const[glowy,setGlowy] = useState("red")
	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className="Lights">
				<div
					className={glowy == "red" ? "red light glowy":"red light"}
					onClick={()=>setGlowy("red")}>
				</div>
				<div className={glowy == "yellow" ? "yellow light glowy":"yellow light"}
					onClick={()=>setGlowy("yellow")}>
				</div>
				<div className={glowy == "green" ? "green light glowy":"green light"}
					onClick={()=>setGlowy("green")}></div>
			</div>

		</div>
	);
};

export default Home;