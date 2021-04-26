import styled from "styled-components";
import bible from "../styles2/unsplash-bible.jpg";

export const Chapter = styled.div`
  width: 90%;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: left;
  background: url(${bible});
  background-size: cover;
  color: black;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Header = styled.div`
  font-family: Day Roman Regular;
  font-size: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const PullDownText = styled.label`
  font-family: Day Roman Regular;
  font-size: 2rem;
`;
