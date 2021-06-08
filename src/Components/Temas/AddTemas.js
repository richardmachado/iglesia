import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  StyledForm,
  Inputs,
  Titulo,
  Button,
} from "../../styles2/AddTemasStyles.js";

const BACKEND_API = process.env.REACT_APP_BACKEND;

function AddTemas(props) {
  const { register, handleSubmit, errors } = useForm();
  // const [isLoading, setLoading] = useState(false);

  const onSubmit = (data) => {
    // setLoading(true);
    axios
      .post(`${BACKEND_API}/temas`, data)
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 3000)))
      .then((res) => {
        props.history.push("/edittemas");
      })
      .catch((err) => {
        alert((err.message = "Tema failed"));
        console.log(err.response);
      });
  };

  const notify = () => toast.info("Submitting !");

  return (
    <Container>
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
          />
          <div className="footer">
            <Button onClick={notify}>Add Tema</Button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              closeButton="false"
              hideProgressBar="false"
            />
          </div>
        </StyledForm>
      </form>
    </Container>
  );
}

export default AddTemas;
