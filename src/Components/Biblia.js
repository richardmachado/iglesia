import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


function Biblia(props) {

    const [neo, setNeo] = useState([]);
    const options = {
        headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host" : "ajith-holy-bible.p.rapidapi.com",
            "useQueryString" : "true"
          },   
    }
  useEffect(() => {
    axios

        .get("https://ajith-holy-bible.p.rapidapi.com/GetBooks", options)
      .then(response => {
          console.log(response.data)
          setNeo(response.data);
   
      })
      .catch(err => {
        console.log(err);
      });
  }, [options]);
  if (!neo) {
    return <div className="sweet-loading">
   <h2>Loading...</h2>
         </div>;
  }
  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3"><span classname="text-dark"> Santa </span>  Biblia</h1>        
        
         {neo.map(biblename => {
          return (
           <div>
                 <h1>{biblename.data}</h1>
                
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Biblia;