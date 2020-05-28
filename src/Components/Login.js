import React from "react";
import {  useForm} from "react-hook-form";
import {  axiosWithAuth}  from "../utils/axiosWithAuth"

import {  Login, 
          Container, 
          Button, 
          Body, 
          Formgroup, 
          Styledform, 
          Labels, 
          Inputs  
} from "../styles2/LoginStyles";


export default function LoginForm(props) {
  const { register, handleSubmit, errors } = useForm();


  const onSubmit = data => {
   

    axiosWithAuth()
      .post("https://portfolio-machado.herokuapp.com/api/auth/login", data)

      .then(res => {
        
        localStorage.setItem("token", res.data.token);
        props.history.push("/addtemas");
      })
      .catch(err => {
        alert((err.message = "Invalid Username or Password"));
        console.log(err.response);
      });
  };


return (
  <Container>
    <Login>Login</Login>
    <Body>
      Enter your username and password. Do not share your password 
    </Body>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styledform>
        <Formgroup>

          {/* Start of UserName field */}
          <Labels htmlFor='username'>
            User Name
            <Inputs
              type='text'
              name='username'
              placeholder='username'
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
          </Labels>
          {errors.username && errors.username.type === "required" && (
            <span>Please enter a username</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Username is too short</span>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <span>Username is too long</span>
          )}

          {/* End of UserName Field */}

          {/* Start of Password Field */}
          <Labels htmlFor='password'>
            <span>
              {" "}
              
            </span>
            Password
          </Labels>
          <Inputs
            type='password'
            placeholder='Password'
            name='password'
            ref={register({ required: true, minLength: 4 })}
          />

          {errors.password && errors.password.type === "required" && (
            <span>Password is required</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>Password is too short - 4 characters</span>
          )}
          {/* End of password field  */}
        </Formgroup>

        <div className='footer'>
          <Button>Submit</Button>
        </div>

      </Styledform>
    </form>
  </Container>
);
}