import React, {useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


import { 

  Container, 
  StyledForm, 
  Inputs,
  Titulo,
  Button
  
} from "../styles2/AddTemasStyles.js"

function AddTemas (props) {
    const { register, handleSubmit, errors } = useForm();
    const [isLoading, setLoading] = useState(false);
  
    const onSubmit = data => {
      setLoading(true);
      axios
        .post("https://ijsv-backend.herokuapp.com/api/temas", data)
        .then((res) => {
          props.history.push("/edittemas");
        })
        .catch((err) => {
          alert((err.message = "Tema failed"));
          console.log(err.response);
        });
    };
  
  
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
              {!isLoading && <Button>Add Tema</Button>}

              {isLoading && (
                <Button>
                  <i className="fas fa-spinner fa-spin" disabled={isLoading}>
                    Adding Tema
                  </i>
                </Button>
              )}
            </div>
          </StyledForm>
        </form>
      </Container>
    );
  }
  
  


export default AddTemas;