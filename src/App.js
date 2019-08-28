import React , {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"; // to run axios, must do rpm add axios
import PhotoCard from "./components/Nasa";

function App(props) {
  const[data, setData] = useState({});
  const[date, setDate] = useState(10);
  const changeDate = () =>{
    setDate(date+1)
  }
   useEffect(()=>{
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=YgjSejb4IbKT2OcIVSVLix4070Gb2eNUabychIyz&date=2019-08-${date}`)
         .then(res => {
           
     console.log("res", res);
      setData(res.data);
            
        });
    },[setDate]);
      
   
  return (
    <>
    <div className="Heading">
      <h1>
      Tim's Nasa Picture Page
      </h1>
     
    </div>
    <div className="App">
       <button onClick={changeDate}>Change Picture</button>
      {/* <PhotoCard /> this renders the photocard */}
      <PhotoCard 
      title={data.title}
      picture={data.url}
      description={data.explanation}/>
      </div> 
    </>
  );
}

export default App;
