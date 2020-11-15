import React, { useState, useEffect } from "react";
import axios from 'axios';
import _ from 'lodash';
import { newtestamentbooks } from "../BibleBooks/bible_books_newbooks";
import {
  Chapter,
  Header,
  PullDownText
} from '../../styles2/BibleStyles';
const API_KEY = process.env.REACT_APP_ENGLISH;

function NewTestament () {
	const [forms, setForms] = useState([]);
	const [chapter, setChapter] = useState(1);
	const [book, setBook] = useState('MATTHEW');
	const [numberChapters, setNumberChapters] = useState(
		[]
	);

	const handleChange = (event) => {
		setChapter(event.target.value);
	};

	const handleSubmit = (e) => {
		setBook(e.target.value);
	};

	const options = {
		headers: {
			'x-rapidapi-key': API_KEY,
			'x-rapidapi-host':
				'ajith-holy-bible.p.rapidapi.com',
			useQueryString: 'true',
		},
	};

	function processData() {
		return forms[0].Output.split(/\s+(?=\d)/g);
	}

	useEffect(() => {
		axios
			.get(
				`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`,
				options
			)
			.then((response) => {

				setForms([response.data]);
			})
			.catch((err) => {
				console.log(err);
			});

		newtestamentbooks.map((item) => {
			if (item.value === book) {
				return setNumberChapters(item.chapters);
			}
		});

	}, [book, chapter]);
	if (!forms) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className='forms'>
			<Header>New Testament</Header>

			<PullDownText htmlFor='book'>

				<select
					name='book'
					onChange={(e) => {
						handleSubmit(e);
					}}
					form='book'
				>
					{newtestamentbooks.map(
						({ value, label }) => (
							<option value={value}>
								{label}
							</option>
						)
					)}
				</select>
			</PullDownText>
			<PullDownText htmlFor='chapter'>
				<select
					name='chapter'
					type='text'
					onChange={(event) =>
						handleChange(event)
					}
					form='chapter'
				>
					{_.range(1, numberChapters + 1).map(
						(value) => (
							<option
								key={value}
								value={value}
								onChange={(e) => {
									setChapter(
										e.target.value
									);
								}}
							>
								{value}
							</option>
						)
					)}
				</select>
			</PullDownText>

			{forms.map((chapterinfo) => {
				return (
					<Chapter>
						<br></br>
						{processData().map((data2) => (
							<>
								<p>{data2}</p>
							</>
						))}
					</Chapter>
				);
			})}
		</div>
	);
}
  
  export default NewTestament;