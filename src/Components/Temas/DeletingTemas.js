import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import {
  Container,
  StyledForm,
  Button,
  CancelButton,
  HeaderButtons,
  TemasBody,
} from "../../styles2/DeletingTemasStyles.js";

const BACKEND_API = process.env.REACT_APP_BACKEND;

function DeletingTemas(props) {
  const [getTemasDataById, setTemasDataById] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { handleSubmit } = useForm();

  const id = props.match.params.id;

  useEffect(() => {
    const getDataById = async () => {
      try {
        const result = await axios.get(`${BACKEND_API}/temas/${id}`);
        setTemasDataById(result.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [id]);

  const onSubmit = () => {
    setLoading(true);
    axios
      .delete(`${BACKEND_API}/temas/${id}`)
      .then((res) => {
        props.history.push("/deletetemas");
        console.log("response", res);
      })
      .catch((err) => {
        alert((err.message = "Editing Tema Failed"));
        console.log(err.response);
      });
  };
  return (
    <Container>
      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderButtons>
            {" "}
            <Link to="/deletetemas">
              <CancelButton>Cancelar</CancelButton>
            </Link>
            {!isLoading && <Button>Borrar Tema</Button>}
            {isLoading && (
              <Button>
                <i className="fas fa-spinner fa-spin" disabled={isLoading}>
                  Borrando Tema
                </i>
              </Button>
            )}
          </HeaderButtons>

          <p>Si no quiere borrar, usar el boton "cancelar"</p>

          <div className="tema-box" key={getTemasDataById.id}>
            <h4 className="temas-title">{getTemasDataById.title} </h4>
            <TemasBody>{getTemasDataById.body1} </TemasBody>
            <TemasBody>{getTemasDataById.body2} </TemasBody>
            <TemasBody>{getTemasDataById.body3} </TemasBody>
          </div>
        </form>
      </StyledForm>
    </Container>
  );
}

export default withRouter(DeletingTemas);
