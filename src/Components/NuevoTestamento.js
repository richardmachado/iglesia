import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';


const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-weight: bold;
text-align: left; 
background-color: #f2eecb; 
`

function Nuevo() {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook] = useState("MAT"); 
    
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


        <label  htmlFor="chapter">
          Select a chapter number
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