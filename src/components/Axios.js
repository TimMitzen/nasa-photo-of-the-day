  import React, {useState, useEffect} from "react";
  import axios from "axios";
  import PhotoCard from "./Nasa";

  
  
  
  const GetPicture = (props)  => {
  const[data, setData] = useState({});
  const[date, setDate] = useState(1);
  const changeDate = (props) =>{
    setDate(date+1)
    if(date === 30){
       setDate(1)
    } 
    else if(date===20){
      alert("Not working");
    }
     
  }
   useEffect(()=>{
   axios
   .get(`https://api.nasa.gov/planetary/apod?api_key=YgjSejb4IbKT2OcIVSVLix4070Gb2eNUabychIyz&date=2019-08-${date}`)
         .then(res => {
           
     console.log("res", res);
      setData(res.data);
            
        });
    },[date]);
    return(
       <>
   
      
      
      <PhotoCard 
      
      title={data.title}
      picture={data.url}
      description={data.explanation}/>
      <button onClick={changeDate}>Change Picture</button>
      </>

    );
   }
   

   export default GetPicture;