import React, { useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../../App.css";
import * as ReactBootStrap from "react-bootstrap";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const BACKEND_API = process.env.REACT_APP_BACKEND;

function DeleteTemas(props) {
  const [neon, setNeo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/temas`)
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
          <span className="text-dark" style={{ backgroundColor: "red" }}>
            {" "}
            Cuidado cuando borrando Temas !!
          </span>
        </h1>
        {neon.map((temas) => {
          return (
            <div className="tema-box" key={temas.id}>
              <h2 className="temas-title">{temas.title} </h2>
              <Link to={`/deletingtemas/${temas.id}`}>
                <button className="btn btn-danger">Delete</button>
              </Link>
              <p className="temas-body">{temas.body1}</p>
              <p className="temas-body">{temas.body2}</p>
              <p className="temas-body">{temas.body3}</p>
            </div>
          );
        })}
        {loading ? !neon : <ReactBootStrap.Spinner animation="border" />}
      </div>
    </div>
  );
}

export default DeleteTemas;
