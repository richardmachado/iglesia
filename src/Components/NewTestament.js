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

function NewTestament () {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook]= useState("MATTHEW")

    const handleChange = event => {
      setChapter(event.target.value);
    };

    const handleSubmit = e => {
      setBook(e.target.value);
    };
    const options = {
        headers: {
            "x-rapidapi-key": "4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a",
            "x-rapidapi-host" : "ajith-holy-bible.p.rapidapi.com",
            "useQueryString" : "true"
          },   
    }
    function processData() {
      return forms[0].Output.split(/\s+(?=\d)/g);
    }
    

    useEffect(() => {
      
    axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`, options)
          .then(response => {
          setForms([response.data]);
        })
        .catch(err => {
          console.log(err);
        });
    },[chapter, book]);
    if (!forms) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div className="forms">
  <h1>New Testament </h1>

  <h1>  Book of {book} <br></br>Chapter : {chapter}</h1>


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
         Select a book
         <select name="book" 
          onChange={e => handleSubmit(e)}
          form="book">
            <option value="Matthew">Matthew</option>  
            <option value="Mark">Mark</option>
            <option value="Luke">Luke</option>
            <option value="John">John</option>
            <option value="Acts">Acts</option>
            <option value="Romans">Romans</option>
            <option value="1 Corinthians">1 Corinthians</option>
            <option value="2 Corinthians">2 Corinthians</option>
            <option value="Galatians">Galatians</option>
            <option value="Ephesians">Ephesians</option>
            <option value="Philippians">Philippians</option>
            <option value="Colossians">Colossians</option>
            <option value="1 Thessalonians">1 Thessalonians</option>
            <option value="2 Thessalonians">2 Thessalonians</option>
            <option value="1 Timothy">1 Timothy</option>
            <option value="2 Timothy">2 Timothy</option>
            <option value="Titus">Titus</option>
            <option value="Philemon">Philemon</option>
            <option value="Hebrews">Hebrews</option>
            <option value="James">James</option>
            <option value="2 Peter">2 Peter</option>
            <option value="1 John">1 John</option>
            <option value="2 John">2 John</option>
            <option value="3 John">3 John</option>
            <option value="Jude">Jude</option>
            <option value="Revelation">Revelation</option>
           
        </select>
      </label>
   
       {forms.map(chapterinfo => {
         
         return <Chapter>
         <br></br>
             {processData().map((data2) => (
               <>
                 <p>{data2}</p>
               
                 </>
             ))}
         </Chapter>
       })} 
      </div>
    
    );
  }
  
  export default NewTestament;