import React, { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

function Biblia(props) {
    const [neo, setNeo] = useState([]);
    const options = {
        headers: {
            "Api-key": API,
            "Access-Control-Allow-Origin": null   },
        
    }


  useEffect(() => {
    axios

        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books", options)
      .then(response => {
          console.log(response)
          setNeo(response.data);
   
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
        
         {neo.map(biblename => {
          return (
           <div>
                  <h2>Libro de </h2>
                
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Biblia;