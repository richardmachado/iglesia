import React, { useState, useEffect } from "react";
import axios from 'axios';
import { libros_de_biblia } from "./BibleBooks/librosnuevos";
import { Chapter, Header, PullDownText } from '../styles2/BibleStyles';
import * as ReactBootStrap from 'react-bootstrap';
const API_KEY = process.env.REACT_APP_SPANISH

function Nuevo() {
  const [forms, setForms] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MAT");
  const [isLoading, setLoading] = useState(false);
  
  function stripHTML(text) {
    return text.replace(/<.*?>/gm, ' ');
  }
 
  const handleChange = event => {
    setChapter(event.target.value);
  };

  const handleSubmit = e => {
    setBook(e.target.value);
  };
  const options = {
    headers: {
      "Api-key": API_KEY
    },
  }
  
  useEffect(() => {
      
    axios.get(`https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}`, options)
      .then(response => {
        setForms([response.data.data]);
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, [chapter, book]);
  if (!forms) {
    return <h1>Loading...</h1>;
  } else {
  
    return (
      <div className="forms">
        <Header>Nuevo Testamento</Header>
        <PullDownText htmlFor="chapter">

        <select
            name="chapter"
            type="text"
            onChange={event => handleChange(event)}
            form="chapter">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
          </select>
        </PullDownText>
        <PullDownText htmlFor="book">
         capitulo de
         <select name="book"
            onChange={e => handleSubmit(e)}
            form="book">
            {libros_de_biblia.map(({ value, label }) => <option value={value} >{label}</option>)}
  
          </select>
        </PullDownText>
   
        {forms.map(chapterinfo => {
         
          return <Chapter>
            <br></br>
            <p>{stripHTML(chapterinfo.content)}</p>
            {isLoading ? (!forms) : (<ReactBootStrap.Spinner animation="border" />)} 
          </Chapter>
        })}
      </div>
    
    );
  }
}

  
  export default Nuevo