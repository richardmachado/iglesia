import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";


import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function DeleteTemas(props) {

  const [neon, setNeo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://ijsv-backend.herokuapp.com/api/temas")
      .then((response) => {
        setNeo(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!neon) {
    return (
      <div className="sweet-loading">
        <ClipLoader css={override} size={150} color={"#123abc"} />
        Loading...
      </div>
    );
  }

  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3">
          <span className="text-dark"> </span> Cuidado cuando editando Temas
        </h1>
        {neon.map((biblename) => {
          return (
            <div className="tema-box" key={biblename.id}>
              <h2 className="temas-title">{biblename.title} </h2>

              <Link to={`/editandotemas/${biblename.id}`}>
                <button class="btn btn-info">Edit</button>
              </Link>
              <p className="temas-body">{biblename.body1}</p>
              <p className="temas-body">{biblename.body2}</p>
              <p className="temas-body">{biblename.body3}</p>
            </div>
          );
        })}
        {loading ? !neon : <ReactBootStrap.Spinner animation="border" />}
      </div>
    </div>
  );
}

export default DeleteTemas;
