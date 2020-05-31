import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const API = process.env.REACT_APP_ENGLISH_KEY;

const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-weight: bold;
`

function Antiguo() {
  const [forms, setForms] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("GEN");
  function stripHTML(text) {
    return text.replace(/<.*?>/gm, '');
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
        <h1>Antiguo Testamento</h1>

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
            <option value="GEN">Génesis</option>
            <option value="EXO">Éxodo</option>
            <option value="LEV">Levítico</option>
            <option value="NUM">Números</option>
            <option value="DEU">Deuteronomio</option>
            <option value="JOS">Josué</option>
            <option value="JDG">Jueces</option>
            <option value="RUT">Rut</option>
            <option value="1SA">1 Samuel</option>
            <option value="2SA">2 Samuel</option>
            <option value="1KI">1 Reyes</option>
            <option value="2KI">2 Reyes</option>
            <option value="1CH">1 Crónicas</option>
            <option value="2CH">2 Crónicas</option>
            <option value="EZR">Esdras</option>
            <option value="NEH">Nehemías</option>
            <option value="EST">Ester</option>
            <option value="JOB">Job</option>
            <option value="PSA">Salmos</option>
            <option value="PRO">Proverbios</option>
            <option value="ECC">Eclesiastés</option>
            <option value="SNG">Cantares</option>
            <option value="ISA">Isaías</option>
            <option value="JER">Jeremías</option>
            <option value="LAM">Lamentaciones</option>
            <option value="EZK">Ezequiel</option>
            <option value="DAN">Daniel</option>
            <option value="HOS">Oseas</option>
            <option value="JOL">Joel</option>
            <option value="AMO">Amós</option>
            <option value="OBA">Abdía</option>
            <option value="JON">Jonás</option>
            <option value="MIC">Miqueas</option>
            <option value="NAM">Nahúm</option>
            <option value="HAB">Habacuc</option>
            <option value="ZEP">Sofonias</option>
            <option value="HAG">Hageo</option>
            <option value="ZEC">Zacarías</option>
            <option value="MAL">Malaquias</option>
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

  
  export default Antiguo