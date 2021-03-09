import styled from "styled-components";
// import { Link } from 'react-router-dom'

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  //added
  width: 200px;
  padding: 20px;
`;

export const Login = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #5a4e4e;
  mix-blend-mode: normal;
  width: 10rem;
  height: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: #fff;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
  border-radius: 4px;
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  padding: 17px 10px;
  transition: transform 200ms ease-in-out;
`;
export const Button = styled.button`
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #DADADA;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #FFB90F;
  }
  &:focus {
    outline: none;
  `;
export const HeaderButtons = styled.button`
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #DADADA;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: gold;
  }
  &:focus {
    outline: none;
  `;

// turn into styled components and delete any duplicates

export const Titulo = styled.input`
  margin-top: 1px;
  min-width: 30em;
  height: 37px;
  padding: 0px 10px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 10;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
  :focus {
    background-color: lightblue;
  }
  @media only screen and (max-width: 750px) {
    min-width: 20rem;
  }
`;

export const Inputs = styled.textarea`
  margin-top: 1px;
  min-width: 40rem;
  padding: 0px 10px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
  width: 100%;
  height: 200px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: vertical;

  :focus {
    background-color: lightblue;
  }

  @media only screen and (max-width: 750px) {
    min-width: 20rem;
  }
`;
