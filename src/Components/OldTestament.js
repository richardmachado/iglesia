import React, { useState, useEffect } from "react";
import axios from 'axios';
import _ from 'lodash';
import { oldtestamentbooks} from "./BibleBooks/bible_books_oldtestament";

import { Chapter, Header, PullDownText } from '../styles2/BibleStyles';
const API_KEY = process.env.REACT_APP_ENGLISH;

// const arr = Array.apply(null, { length: oldtestamentbooks.chapters }).map(Number.call, Number);
// console.log(arr)

const renderKeys = () => {
  var arr = [1,2,3,4,5,6,7,8,9]
  return arr.map((val) => { 
    return <option>{val}</option>
  });
};

console.log(renderKeys)

function OldTestament () {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook] = useState("GENESIS");
  
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
      
    axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`, options)
          .then(response => {
             setForms([response.data]);  
        })
        .catch(err => {
          console.log(err);
        });
    },[chapter, book, options]);
    if (!forms) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div className="forms">
        <Header>Old Testament</Header>

  <PullDownText htmlFor="book">
         Book of 
         <select name="book"
            onChange={e => handleSubmit(e)}
            form="book">
            
            {
              oldtestamentbooks.map(({ value, label }) => <option value={value} >{label}</option>)
            }

          </select>
        </PullDownText>
        <PullDownText htmlFor="chapter">

        <select
            name="chapter"
            type="text" 
            onChange={event => handleChange(event)}
            form="chapter">
          
            
               { _.range(1, 150).map(value => <option key={value} value={value}>{value}</option>) }
            

            {/* { oldtestamentbooks.map(({value, chapters}) => <option key={value} value={value}>{chapters}</option>)} */}
            
            {/* {
              oldtestamentbooks.map(Array(10), function (el, i) { return <option>{i}</option>} )
            } */}
              {/* {renderKeys} */}
        </select>
      </PullDownText>
   
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
  
  export default OldTestament;