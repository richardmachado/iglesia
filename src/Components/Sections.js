import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const API = process.env.REACT_APP_API_KEY;

const options = {
           headers: {"Api-key": API}
      }

function Sections(props) {
  
    const [ seccion, setSeccion ] = useState();
  
  useEffect(() => {
    axios
        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/sections/MAT.S1", options)
      .then(response => {
          console.log(response.data.data)
          setSeccion(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!seccion) {
    return <div>
   <h2>Loading...</h2>
         </div>;
  }
  return (
    <div className="body">
    <div className="container">
      <h1 className="display-4 my3"><span classname="text-dark"> </span> Seccion </h1>        
              {seccion.map(biblename => {
                  return (
                      <div>
                       <h1>{biblename.chapterId} </h1>
                       
                      </div> 
              )
              })}
 
      </div>
    </div>


    
    
  );
}

export default Sections;