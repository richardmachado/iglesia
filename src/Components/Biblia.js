import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
const API = process.env.REACT_APP_API_KEY;

function Biblia(props) {
console.log(props)
    const [neo, setNeo] = useState([]);
    const options = {
        headers: {
            "Api-key": API},   
    }
  useEffect(() => {
    axios

        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books", options)
      .then(response => {
          console.log(response)
          setNeo(response.data.data);
   
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
                  <h2>Libro de <Link to={`/${biblename.id}`}> {biblename.name}</Link> </h2>
                
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Biblia;