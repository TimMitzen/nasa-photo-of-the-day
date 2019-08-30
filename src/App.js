import React from "react";
import "./App.css";
 // to run axios, must do rpm add axios
import GetPicture from "./components/Axios"

function App(props) {
 
   
  return (
    <>
    
    {/* <div className="App"> */}
   
      {/* <PhotoCard /> this renders the photocard */}
      <GetPicture/>
      {/* <PhotoCard/> */}
      {/* </div>  */}
    </>
  );
}

export default App;
