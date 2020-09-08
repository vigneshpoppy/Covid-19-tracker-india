import React from "react";
//import axios from"axios";



function Cards(props){
  


return( 
  
    <div className='card'>
  <h1  className="title" style={{color:props.color}}> {props.title}</h1>
  <hr className="new1" style={{color:props.color}} ></hr>
    <h1 className="emoji">{props.data}</h1>
    
    </div>


)
};


export default Cards;