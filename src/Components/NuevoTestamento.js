import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const API = process.env.REACT_APP_ENGLISH_KEY;

const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-weight: bold;
`

function Nuevo() {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook] = useState("MAT"); 
    
  function stripHTML(text) {
    return text.replace(/<.*?>/gm, ' ');
  }
    function addBreak(text) {
        return text.replace(' ','_' )
    }

    const handleChange = event => {
      setChapter(event.target.value);
    };

    const handleSubmit = e => {
      setBook(e.target.value);
    };
    const options = {
      headers: {
        "Api-key": "59fc91093130021fbd5e3439e270c4b2",
      
      },
    }
  
    

    useEffect(() => {
      
      axios.get(`https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}`, options)
        .then(response => {
          setForms([response.data.data]);
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        });
    }, [chapter, book]);
    if (!forms) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div className="forms">
        <h1>Nuevo Testamento</h1>

        <h1>  Libro de: {book} <br></br>Capítulo: {chapter}</h1>


        <label className="prompt" htmlFor="chapter">
          Entre <span>  </span> 
        <input type="text"
            onChange={event => handleChange(event)}
            placeholder="capítulo"
            name="chapter">
          </input>
        </label>

        <label htmlFor="book">
          Seleccione un libro
         <select name="book"
            onChange={e => handleSubmit(e)}
            form="book">
            <option value="MAT">San Mateo</option>
            <option value="MRK">San Marcos</option>
            <option value="LUK">San Lucas</option>
            <option value="JHN">San Juan</option>
            <option value="ACT">Hechos</option>
            <option value="ROM">Romanos</option>
            <option value="1CO">1 Corintios</option>
            <option value="2CO">1 Corintios</option>
            <option value="GAL">Gálatas</option>
            <option value="EPH">Efesios</option>
            <option value="PHP">Filipenses</option>
            <option value="COL">Colonseses</option>
            <option value="1TH">1 Tesalonicenses</option>
            <option value="2TH">2 Tesalonicenses</option>
            <option value="1TI">1 Timoteo</option>
            <option value="2TI">2 Timoteo</option>
            <option value="TIT">Tito</option>
            <option value="PHM">Filemón</option>
            <option value="HEB">Hebreos</option>
            <option value="JAS">Santiago</option>
            <option value="1PE">1 Pedro</option>
            <option value="2PE">2 Pedro</option>
            <option value="1JN">1 Juan</option>
            <option value="2JN">2 Juan</option>
            <option value="3JN">3 Juan</option>
            <option value="JUD">Judas</option>
            <option value="REV">Apocalipsis</option>
           
          </select>
        </label>
   
        {forms.map(chapterinfo => {
         
            return <Chapter>
               <br></br>
                <p>{stripHTML(chapterinfo.content)}</p>
              
          </Chapter>
        })}
      </div>
    
    );
  }

  
  export default Nuevo