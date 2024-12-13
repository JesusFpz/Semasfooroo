import React, {useState} from "react"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const  [color1, setColor1] = useState("bg-danger")
	const  [color2, setColor2] = useState("bg-warning")
	const  [color3, setColor3] = useState("bg-success")
	

	 function cambiarcolor1(){
	 	 setColor1("bg-rojo-brillante")
		 setColor2("bg-warning")
		 setColor3("bg-success")

	 }
	 function cambiarcolor2()
	 {
		setColor2("bg-amarillo-brillante")
		setColor1("bg-danger")
		setColor3("bg-success")
	 }
	 function cambiarcolor3()
	 {
		setColor3("bg-verder-brillante")
		setColor1("bg-danger")
		setColor2("bg-warning")
	 }
	return (
		<div className="card mx-auto mt-5 bg-dark" style={{width: "5rem"}}>
			
  <div className="list-group list-group-flush mx-auto">
    <div className={color1+ " borders"} onClick={cambiarcolor1}></div>
    <div className={color2+ " borders"} onClick={cambiarcolor2}></div>
    <div className={color3+ " borders"} onClick={cambiarcolor3}></div>
  </div>
</div>
		
	)
};

export default Home;
