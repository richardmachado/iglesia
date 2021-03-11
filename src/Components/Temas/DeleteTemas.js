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

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

function DeleteTemas(props) {
  // const removeId = (id) => {
  //   axios
  //     .delete(`https://ijsv-backend.herokuapp.com/api/temas/${id}`)
  //     .then((res) => {
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       alert((err.message = "Tema failed to delete"));
  //       console.log(err.response);
  //     });
  // };
  const [neon, setNeo] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);

  // }

  // var subtitle;
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

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
        {neon.map((temas) => {
          return (
            <div className="tema-box" key={temas.id}>
              <h2 className="temas-title">{temas.title} </h2>
              <Link to={`/borrandotemas/${temas.id}`}>
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
