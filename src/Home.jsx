import React from "react"
import "./Home.css";
import img from "./images/commerce.png"

function Home() {
   return (
    <div>
       <div className="home">
            <div className="home_container"></div>
            <img src={img} alt="" />
       </div>
    </div>
   ) 
}

export default Home