import React,{useState,useEffect} from "react";
import "./styles.css";
import Cards from "./cards";







export default function App() {
  const[confirm,setConfirm]= useState("");
  const[death,setDeath]= useState("");
  const[test,setTest]= useState("");
  const[active,setActive]= useState("");
  useEffect(()=>{
    fetch("https://api.covidindiatracker.com/total.json")
  .then(response => response.json())
  .then(result =>{
    console.log(result.confirmed)
     setConfirm(result.confirmed)
     setTest(result.recovered)
     setDeath(result.deaths)
     setActive(result.active)
                }
    
  );

    
  })
  return (
    <div className="App">
            <div  className="header">
              <h1>COVID-19 STATS</h1>
              </div>
      
            <div className="cards">
            <Cards color={"orange"} title={"Confirmed Cases"} data={confirm}/>
            <Cards color={"grey"} title={"Recovered Cases"} data={test}/> 
            <Cards color={"green"} title={"Active Cases"} data={active}/>
            <Cards color={"red"} title={"Death Cases"} data={death}/>
          </div>
    </div>
  );
}
