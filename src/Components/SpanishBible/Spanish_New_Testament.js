import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { spanish_books_new_testament } from "../BibleBooks/bible_books_spanish_new_testament";
import { Chapter, Header, PullDownText } from "../../styles2/BibleStyles";
import * as ReactBootStrap from "react-bootstrap";

const API_KEY = process.env.REACT_APP_SPANISH;

function Spanish_New_Testament() {
  const [forms, setForms] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MAT");
  const [isLoading, setLoading] = useState(false);
  const [numberChapters, setNumberChapters] = useState([]);

  function stripHTML(text) {
    return text.replace(/<.*?>/gm, " ");
  }

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  const handleSubmit = (e) => {
    setBook(e.target.value);
  };
  const options = {
    headers: {
      "Api-key": API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}`,
        options
      )
      .then((response) => {
        setForms([response.data.data]);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
    spanish_books_new_testament.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [chapter, book]);
  if (!forms) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="forms">
        <Header>Nuevo Testamento</Header>
        <PullDownText htmlFor="book">
          <select name="book" onChange={(e) => handleSubmit(e)} form="book">
            {spanish_books_new_testament.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </PullDownText>
        <PullDownText>
          <select
            name="chapter"
            type="text"
            onChange={(event) => handleChange(event)}
            form="chapter"
          >
            {_.range(1, numberChapters + 1).map((value) => (
              <option
                key={value}
                value={value}
                onChange={(e) => {
                  setChapter(e.target.value);
                }}
              >
                {value}
              </option>
            ))}
          </select>
        </PullDownText>

        {forms.map((chapterinfo) => {
          return (
            <Chapter>
              <br></br>
              <p>{stripHTML(chapterinfo.content)}</p>
              {isLoading ? (
                !forms
              ) : (
                <ReactBootStrap.Spinner animation="border" />
              )}
            </Chapter>
          );
        })}
      </div>
    );
  }
}

export default Spanish_New_Testament;
