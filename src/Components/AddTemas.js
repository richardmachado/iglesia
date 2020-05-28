import React from 'react';
import axios from 'axios';
import {  useForm} from "react-hook-form";

import { 
  Login, 
  Container, 
  StyledForm, 
  Inputs 
} from "../styles2/FeedbackStyles.js"

function AddTemas (props) {
  
    const { register, handleSubmit, errors } = useForm();
  
  
    const onSubmit = data => {
     
  
      axios
        .post("https://portfolio-machado.herokuapp.com/api/feedback", data)
  
        .then(res => {

       props.history.push("/temas")
        })
        .catch(err => {
          alert((err.message = "Feedback failed"));
          console.log(err.response);
        });
    };
  
  
    return (
        <Container>
        <Login>Añadir un Tema</Login>
      
        <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <label for="title"> </label>
          <Inputs 
            type="text"  
            placeholder="Título" 
            id="title"
            name="title" 
          
            aria-invalid={errors.title ? 'true' : 'false'}
            aria-describedby="error-title-required error-title-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 128})} 
          />

          <span
        role="alert"
        id="error-name-required"
        style={{
          display: errors.title && errors.title.type === "required"
            ? "block"
            : "none"
        }}
      >
        Titulo is requerido
      </span>
      <span
        role="alert"
        id="error-name-maxLength"
        style={{
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
      ></span>

<label for="feedback"></label>
          <textarea
            rows="20"
            cols="40"
            type="text" 
            placeholder="Escribir tema aquí" 
            id="body"
            name="body" 
            aria-invalid={errors.body ? 'true' : 'false'}
            aria-describedby="error-body-required error-title-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 10024})} 
          />
    
         

          <span
        role="alert"
        id="error-name-required"
        style={{
          display: errors.body && errors.body.type === "required"
            ? "block"
            : "none"
        }}
      >
       Tema is requerido
      </span>
      <span
        role="alert"
        id="error-feedback-maxLength"
        style={{
          display: errors.body && errors.body.type === "maxLength"
            ? "block"
            : "none"
        }}
      ></span>
       <Inputs type="submit" />
       </StyledForm>
        </form>
        </Container>
      );
  }
  
  


export default AddTemas;