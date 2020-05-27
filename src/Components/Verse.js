import React, { useState, useEffect } from "react";
import axios from "axios";





// // function for today so that it automatically updates the site

// var today = new Date()
// var dd = String(today.getUTCDate()).padStart(2, '0');
// var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + '-' + mm + '-' + dd ;




// // end of today function


function NEO(props) {
    const [neo, setNeo] = useState([]);
    const options = {
        headers: {"Api-key": "59fc91093130021fbd5e3439e270c4b2"}
    }


  useEffect(() => {
    axios

        .get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books", options)
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
                  <p>Libro de  {biblename.name}</p>
             </div> 
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default NEO;