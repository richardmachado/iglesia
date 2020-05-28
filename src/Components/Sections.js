import React, { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

function Sections(props) {
    console.log(props.location.pathname);
    const [neon, setNeo] = useState([]);
    const options = {
        headers: {"Api-key": "59fc91093130021fbd5e3439e270c4b2"}
    }
    const bookname = props.location.pathname;

  useEffect(() => {
    axios

        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/sections/GEN.S1", options)
      .then(response => {
          console.log(response.data)
          setNeo(response.data.data);
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
      <h1 className="display-4 my3"><span classname="text-dark"> Santa </span>  Biblia</h1>        
              {neon.map(biblename => {
                  return (
                      <h2>Test {biblename.title} </h2>       
              )
              })}
 
      </div>
    </div>


    
    
  );
}

export default Sections;