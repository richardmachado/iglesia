import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-style: bold;
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
  <h1>New Testament - </h1>

  <h1>  Book Selected {book} <br></br>Chapter Selected {chapter}</h1>


  <label className= "prompt" htmlFor="chapter">
          Enter a chapter number
        <input type="text" 
        onChange={event => handleChange(event)}
        placeholder="chapter number"
        name ="chapter">
        </input>
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
         
        return  <Chapter>
         <p>{chapterinfo.Output}</p>
         </Chapter>
       })} 
      </div>
    
    );
  }
  
  export default NewTestament;