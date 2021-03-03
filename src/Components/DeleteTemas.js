import React, { useState, useEffect } from "react";
import axios from "axios";
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
      const removeId = (id) => {
        axios
          .delete(`https://ijsv-backend.herokuapp.com/api/temas/${id}`)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            alert((err.message = "Tema failed to delete"));
            console.log(err.response);
          });
      };
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
          <span className="text-dark"> </span> Cuidado cuando borrando Temas
        </h1>
        {neon.map((biblename) => {
          return (
            <div className="tema-box" key={biblename.id}>
              <h2 className="temas-title">{biblename.title} </h2>
              <button
                class="btn btn-danger"
                onClick={() => {
                  if (
                    window.confirm("Está seguro que quiere borrar este tema?")
                  ) {
                    removeId(biblename.id);
                  }
                }}
              >
                Borrar
              </button>
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
