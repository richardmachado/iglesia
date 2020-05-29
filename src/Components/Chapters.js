import React, { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

function Chapters(props) {
    console.log(props.location.pathname);
    const [neo, setNeo] = useState([]);
    const options = {
        headers: {"Api-key": ""}
    }
    const bookname = props.location.pathname;

  useEffect(() => {
    axios

        .get(`https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books${bookname}/chapters`, options)
      .then(response => {
          console.log(response.data.data)
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
                  <h2>Libro de  {biblename.reference}</h2>
                
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Chapters;