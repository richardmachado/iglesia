import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";




function Temas(props) {
  
    const [neon, setNeo] = useState([]);
  
    

  useEffect(() => {
    axios
        .get("https://portfolio-machado.herokuapp.com/api/feedback")
      .then(response => {
          console.log(response.data)
          setNeo(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neon) {
    return <div>
   <h2>Loading...</h2>
         </div>;
  }
  return (
    <div className="body">
    <div className="container">
      <h1 className="display-4 my3"><span classname="text-dark"> </span>  Temas</h1>        
              {neon.map(biblename => {
                  return (
                      <div className="tema-box">
                      <h2>{biblename.title} </h2>  
                      <p>{biblename.body}</p>    
                      </div> 
              )
              })}
 
      </div>
    </div>


    
    
  );
}

export default Temas;