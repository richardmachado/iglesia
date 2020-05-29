import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-style: bold;
`

function Bible () {
    const [forms, setForms] = useState([]);
    console.log(forms)
    const [chapter, setChapter] = useState(1);
    const [book, setBook]= useState("GENESIS")

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
  <h1>Read the Bible</h1>

  <h1>  Book Selected {book} <br></br>Chapter Selected {chapter}</h1>


  <label className= "prompt" htmlFor="chapter">
          Enter a book number
        <input type="text" 
        onChange={event => handleChange(event)}
        placeholder="book number"
        name ="chapter">
        </input>
      </label>

  <label htmlFor="book">
         Select a book
         <select name="book" 
          onChange={e => handleSubmit(e)}
          form="book">
            <option value="GENESIS">Genesis</option>  
            <option value="EXODUS">Exodus</option>
            <option value="LEVITICUS">Leviticus</option>
            <option value="NUMBERS">Numbers</option>
            <option value="Deuteronomy">Deuteronomy</option>
            <option value="Joshua">Joshua</option>
            <option value="Judges">Judges</option>
            <option value="Ruth">Ruth</option>
            <option value="1 Samuel">1 Samuel (1 Kings)</option>
            <option value="2 Samuel">2 Samuel (2 Kings)</option>
            <option value="1 Kings">1 Kings (3 Kings)</option>
            <option value="2 Kings">2 Kings (4 Kings)</option>
            <option value="1 Chronicles">1 Chronicles</option>
            <option value="2 Chronicles">2 Chronicles</option>
            <option value="Ezra">Ezra</option>
            <option value="Nehemiah">Nehemiah</option>
            <option value="Esther">Esther</option>
            <option value="Job">Job</option>
            <option value="Psalms">Psalms</option>
            <option value="Proverbs">Proverbs</option>
            <option value="Ecclesiastes">Ecclesiastes</option>
            <option value="Isaiah">Isaiah</option>
            <option value="Jeremiah">Jeremiah</option>
            <option value="Lamentations">Lamentations</option>
            <option value="Ezekiel">Ezekiel)</option>
            <option value="Daniel">Daniel</option>
            <option value="Hosea">Hosea</option>
            <option value="Joel">Joel</option>
            <option value="Amos">Amos</option>
            <option value="Obadiah">Obadiah</option>
            <option value="Jonah">Jonah</option>
            <option value="Micah">Micah</option>
            <option value="Nahum">Nahum</option>
            <option value="Habakkuk">Habakkuk</option>
            <option value="Zephaniah">Zephaniah</option>
            <option value="Haggai">Haggai</option>
            <option value="Zechariah">Zechariah</option>
            <option value="Malachi">Malachi</option>


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
  
  export default Bible;