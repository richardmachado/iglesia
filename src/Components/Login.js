import React, {useState} from "react";
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
  const [isLoading, setLoading] = useState(false);

  
  const onSubmit = data => {
    setLoading(true)
    axiosWithAuth()
      .post("https://ijsv-backend.herokuapp.com/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/addtemas");
        console.log(res);
      })
      .catch(handleErrors);
      
  };
  function handleErrors(err) {
    if (err.response) {
      alert('There was a problem', err.response.status)
      return(<h1>'There was a problem', {err.response.status}</h1>)
    } else if(err.request) {
      console.log('There was a big problem with the request')
    } else {
      console.log("error", err.message)
    }
  }
  
return (
  <Container>
    <Login>Login</Login>
    <Body>
      Enter your username and password.
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
              ref={register({ required: true, minLength: 7, maxLength: 7 })}
            />
          </Labels>
          {errors.username && errors.username.type === "required" && (
            <h2 style={{color: 'red', marginBottom:'30px' }}>Please enter a username</h2>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <h2 style={{color: 'red', marginBottom:'30px'}}>Username is too short</h2>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <h2 style={{color: 'red', marginBottom:'30px' }}>Username is too long</h2>
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
            ref={register({ required: true, minLength: 7 })}
          />
          {errors.password && errors.password.type === "required" && (
            <h3 style={{color: 'red', marginBottom:'30px' }}>Password is required</h3>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <h3 style={{color: 'red', marginBottom:'30px' }}>Password is too short - 7 characters</h3>
          )}
          {/* End of password field  */}
        </Formgroup>

        <div className='footer'>
       
          {!isLoading && <Button>Login</Button>}
   
            {isLoading && (
              <Button>
                <i className="fas fa-spinner fa-spin" disabled={isLoading}>Logging in..
                </i>
              </Button>
          )}

        
        </div>
      </Styledform>
    </form>

    
  </Container>
);
}