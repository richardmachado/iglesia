import React, {useState} from 'react';
import axios from 'axios';
import {  useForm} from "react-hook-form";

// import { 
//   Login, 
//   Container, 
//   StyledForm, 
//   Inputs,
//   Button
// } from "../styles2/TemasStyles.js"

import "../styles2/TemasStyles.scss"

function AddTemas (props) {
    const { register, handleSubmit, errors } = useForm();
    const [isLoading, setLoading] = useState(false);
  
    const onSubmit = data => {
      setLoading(true);
      axios
        .post("https://iglesia-backend.herokuapp.com/api/feedback", data)
        .then(res => {
          props.history.push("/temas")
        })
        .catch(err => {
          alert((err.message = "Tema failed"));
          console.log(err.response);
        });
    };
  
  
    return (
      <div className="input">
        <header className="input-header">
          Añadir un Tema with better styles
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="input-content">
            <d1 className="inputbox">
              <label htmlFor="title" className="inputbox-title"> Titulo </label>
              <input
                className="inputbox"
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
            </d1>

            <label htmlFor="feedback"></label>
            <textarea
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
            <textarea
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
            <textarea
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
            <div className="btns">
              {!isLoading && <button>Add Tema</button>}

              {isLoading && (
                <div className="button">
                  <i className="fas fa-spinner fa-spin" disabled={isLoading}>
                    Adding Tema
                  </i>
                </div>
              )}
            </div>
          </section>
        </form>
      </div>

      // <div id="wrap" className="input">
      //   <header className="input-header">
      //     <h1>Anadir un Tema </h1>
      //   </header>
      //   <section className="input-content">
      //     <h2>
      //       Input Text/Password Animation<span>Only CSS</span>
      //     </h2>
      //     <div class="input-content-wrap">
      //       <dl class="inputbox">
      //         <dt class="inputbox-title">Input Text</dt>
      //         <dd class="inputbox-content">
      //           <input id="input0" type="text" required />
      //           <label for="input0">ID</label>
      //           <span class="underline"></span>
      //         </dd>
      //       </dl>
      //       <dl class="inputbox">
      //         <dt class="inputbox-title">Input Password</dt>
      //         <dd class="inputbox-content">
      //           <input id="input1" type="password" required />
      //           <label for="input1">Password</label>
      //           <span class="underline"></span>
      //         </dd>
      //       </dl>
      //       <div class="btns">
      //         <button class="btn btn-confirm">Add Tema</button>
      //         <button class="btn btn-cancel">Cancel</button>
      //       </div>
      //     </div>
      //   </section>
      // </div>
    );
  }
  
  


export default AddTemas;