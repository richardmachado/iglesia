import React, { useState, useEffect } from "react";
import axios from 'axios';
import { bible_books_newbooks } from "./BibleBooks/bible_books_newbooks";
import { Chapter, Header } from '../styles2/BibleStyles';
import * as ReactBootStrap from 'react-bootstrap';
const API_KEY = process.env.REACT_APP_ENGLISH;

function NewTestament () {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook] = useState("MATTHEW");
    const [isLoading, setLoading] = useState(false);

    const handleChange = event => {
      setChapter(event.target.value);
    };

    const handleSubmit = e => {
      setBook(e.target.value);
    };
    const options = {
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host" : "ajith-holy-bible.p.rapidapi.com",
            "useQueryString" : "true"
          },   
    }
    function processData() {
      return forms[0].Output.split(/\s+(?=\d)/g);
    }
  useEffect(() => {
    setLoading(true);
      
    axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`, options)
          .then(response => {
            setForms([response.data]);

        })
        .catch(err => {
          console.log(err);
        });
    },[chapter, book]);
    // if (!forms) {
    //   return <h1>Loading...</h1>;
    // }
  
    return (
      <div className="forms">
  <Header>New Testament </Header>
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
              {bible_books_newbooks.map(({ value, label }) => <option value={value} >{label}</option>)}
  
          </select>
      </label>
      {isLoading ? (!forms) : (<ReactBootStrap.Spinner animation="border" />)}
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