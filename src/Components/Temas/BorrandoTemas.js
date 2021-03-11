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
} from "../../styles2/BorrandoTemasStyles.js";

function BorrandoTemas(props) {
  const [getVehicleDataById, setVehicleDataById] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { handleSubmit } = useForm();

  const id = props.match.params.id;

  useEffect(() => {
    const getDataById = async () => {
      try {
        const result = await axios.get(
          `https://ijsv-backend.herokuapp.com/api/temas/${id}`
        );
        setVehicleDataById(result.data[0]);
        console.log("results.data", result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [id]);

  const onSubmit = () => {
    setLoading(true);
    axios
      .delete(`https://ijsv-backend.herokuapp.com/api/temas/${id}`)
      .then((res) => {
        props.history.push("/editartemas");
        console.log("response", res);
      })
      .catch((err) => {
        alert((err.message = "Editing Tema Failed"));
        console.log(err.response);
      });
  };
  return (
    <Container>
      <HeaderButtons>
        <Link to="/borrartemas">
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

      <div className="tema-box" key={getVehicleDataById.id}>
        <h4 className="temas-title">{getVehicleDataById.title} </h4>
        <TemasBody>{getVehicleDataById.body1} </TemasBody>
        <TemasBody>{getVehicleDataById.body2} </TemasBody>
        <TemasBody>{getVehicleDataById.body3} </TemasBody>
      </div>

      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledForm></StyledForm>
        </form>
      </StyledForm>
    </Container>
  );
}

export default withRouter(BorrandoTemas);
