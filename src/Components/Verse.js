import React, { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

function Verse(props) {
    const [neo, setNeo] = useState([]);
    const options = {
        headers: {"Api-key": "59fc91093130021fbd5e3439e270c4b2"}
    }


  useEffect(() => {
    axios

        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/GEN.1/verses", options)
      .then(response => {
          console.log(response)
        //   setNeo(response.data);
   
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neo) {
    return <div className="sweet-loading">
   <h2>Loading...</h2>
         </div>;
  }
  return (
    <div className="body">
      <div className="container">
              <h1 className="display-4 my3"><span classname="text-dark"> Santa </span>  Biblia</h1>  
        <h1>Versos</h1>      
        
         {neo.map(biblename => {
          return (
           <div>
                  <h2>Verso de  {biblename.reference}</h2>
                
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Verse;