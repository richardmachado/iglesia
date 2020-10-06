import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function Temas(props) {
  
    const [neon, setNeo] = useState([]);
  
  useEffect(() => {
    axios
        .get("https://iglesia-backend.herokuapp.com/api/feedback")
      .then(response => {
          console.log(response.data)
          setNeo(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (neon) {
    return  <div className="sweet-loading">
    <ClipLoader
      css={override}
      size={150}
      color={"#123abc"}
     
        />Loading...
         </div>;
  }

  
  return (
    <div className="body">
    <div className="container">
      <h1 className="display-4 my3"><span classname="text-dark"> </span>  Temas</h1>        
              {neon.map(biblename => {
                  return (
                      <div className="tema-box" key={biblename.id}>
                      <h2>{biblename.title} </h2>  
                      <p>{biblename.body1}</p>
                      <p>{biblename.body2}</p>    
                      <p>{biblename.body3}</p>    
                      </div> 
              )
              })}
 
      </div>
    </div>
    
  );
}

export default Temas;