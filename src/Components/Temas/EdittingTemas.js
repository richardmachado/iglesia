import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import {
  Container,
  StyledForm,
  Inputs,
  Titulo,
  Button,
} from "../../styles2/AddTemasStyles.js";

const BACKEND_API = process.env.REACT_APP_BACKEND;

function EdittingTemas(props) {
  const [getTemasDataById, setTemasDataById] = useState([]);
  const [editTemasDataById, latestEdit] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const id = props.match.params.id;

  useEffect(() => {
    const getDataById = async () => {
      try {
        const result = await axios.get(`${BACKEND_API}/temas/${id}`);
        setTemasDataById(result.data[0]);
        console.log("results.data", result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [id]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newData = Object.assign({}, getTemasDataById, { [name]: value });
    setTemasDataById(newData);

    const latestData = Object.assign({}, editTemasDataById, {
      [name]: value,
    });
    latestEdit(latestData);
  };

  const onSubmit = () => {
    setLoading(true);
    console.log("it's wokring");
    axios
      .put(
        `https://ijsv-backend.herokuapp.com/api/temas/${id}`,
        editTemasDataById
      )
      .then((res) => {
        props.history.push("/edittemas");
        console.log("response", res);
      })
      .catch((err) => {
        alert((err.message = "Editing Tema Failed"));
        console.log(err.response);
      });
  };
  return (
    <Container>
      <Link to="/edittemas">
        <Button>Cancel</Button>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <label htmlFor="title"> </label>
          <Titulo
            type="text"
            placeholder="Título"
            id="title"
            name="title"
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby="error-title-required error-title-maxLength"
            ref={register({ required: true, minLength: 1, maxLength: 128 })}
            onChange={handleChange}
            value={getTemasDataById.title}
          />
          <span
            role="alert"
            id="error-name-required"
            style={{
              display:
                errors.title && errors.title.type === "required"
                  ? "block"
                  : "none",
            }}
          >
            Titulo es obligatorio
          </span>
          <span
            role="alert"
            id="error-name-maxLength"
            style={{
              display:
                errors.name && errors.name.type === "maxLength"
                  ? "block"
                  : "none",
            }}
          ></span>

          <label htmlFor="feedback"></label>
          <Inputs
            type="text"
            placeholder="Primer párrafo"
            id="body1"
            name="body1"
            aria-invalid={errors.body1 ? "true" : "false"}
            aria-describedby="error-body-required error-title-maxLength"
            ref={register({ required: true, minLength: 1, maxLength: 10024 })}
            onChange={handleChange}
            value={getTemasDataById.body1}
          />

          <span
            role="alert"
            id="error-name-required"
            style={{
              display:
                errors.body1 && errors.body1.type === "required"
                  ? "block"
                  : "none",
            }}
          >
            Primer párrafo es obligatorio
          </span>
          <span
            role="alert"
            id="error-feedback-maxLength"
            style={{
              display:
                errors.body1 && errors.body1.type === "maxLength"
                  ? "block"
                  : "none",
            }}
          ></span>
          <label htmlFor="feedback"></label>
          <Inputs
            type="text"
            placeholder="Segundo párrafo"
            id="body2"
            name="body2"
            ref={register({
              required: false,
              minLength: 1,
              maxLength: 10024,
            })}
            onChange={handleChange}
            value={getTemasDataById.body2}
          />
          <label htmlFor="feedback"></label>
          <Inputs
            type="text"
            placeholder="Tercer párrafo"
            id="body3"
            name="body3"
            ref={register({
              required: false,
              minLength: 1,
              maxLength: 10024,
            })}
            onChange={handleChange}
            value={getTemasDataById.body3}
          />
        </StyledForm>

        <div className="footer">
          {!isLoading && <Button>Editar Tema</Button>}

          {isLoading && (
            <Button>
              <i className="fas fa-spinner fa-spin" disabled={isLoading}>
                Editando Tema
              </i>
            </Button>
          )}
          <p>Si nada cambio, usar el boton "cancel" arriba</p>
        </div>
      </form>
    </Container>
  );
}

export default withRouter(EdittingTemas);
