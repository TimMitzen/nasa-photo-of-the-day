import React from "react";
import "../App.css"

function PhotoCard(props) {
   
return(
<div>
   <h2>{props.title}</h2>
   <img src ={props.picture} alt="Nasa"/>
   <p>
     {props.description}
     </p>
</div>
);
}

export default PhotoCard;