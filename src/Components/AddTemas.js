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
        .post("https://iglesia-backend.herokuapp.com/api/feedback", data)
  
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
        Titulo es obligatorio
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
        
            type="text" 
            placeholder="Primer párrafo"
            id="body1"
            name="body1" 
            aria-invalid={errors.body1 ? 'true' : 'false'}
            aria-describedby="error-body-required error-title-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 10024})} 
          />
    
          <span
        role="alert"
        id="error-name-required"
        style={{
          display: errors.body1 && errors.body1.type === "required"
            ? "block"
            : "none"
        }}
      >
       Primer párrafo es obligatorio
      </span>
      <span
        role="alert"
        id="error-feedback-maxLength"
        style={{
          display: errors.body1 && errors.body1.type === "maxLength"
            ? "block"
            : "none"
        }}
      ></span>
       <label for="feedback"></label>
          <textarea
        
            type="text" 
            placeholder="Segundo párrafo" 
            id="body2"
            name="body2" 
            
            ref={register({required: false, minLength: 1, maxLength: 10024})} 
          />
           <label for="feedback"></label>
          <textarea
        
            type="text" 
            placeholder="Tercer párrafo" 
            id="body3"
            name="body3" 
            ref={register({required: false, minLength: 1, maxLength: 10024})} 
           
          />
       <Inputs type="submit" />
       </StyledForm>
        </form>
        </Container>
      );
  }
  
  


export default AddTemas;