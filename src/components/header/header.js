import React from 'react'
import './header.css'
import {TextField, createTheme, ThemeProvider, MenuItem} from '@material-ui/core'
import categories from './data'
import {debounce} from 'lodash'

const Header = ({
		category, 
		setCategory, 
		word, 
		setWord,
		setMeaning,
	}) => {

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff'
			},
		type: 'dark',
		},
	});

	const handleChange = (e) => {
		setCategory(e.target.value)
		setWord('')
		setMeaning([])
	}

	const handelText = debounce((text) => {
		setWord(text)
	}, 500)

	return (
		<div className='header'>
			<span className='title'> {word ? word : 'Dictionary'} </span>
			<div className='inputs'>
				<ThemeProvider theme={darkTheme}>
					<TextField 
						className='search'
						id='filled-basic'
						// value={word}
						label="Search Word ... "
						onChange={(e) => handelText(e.target.value)} >
					</TextField>
					<TextField
						className='select'
						select
						label="Select Language"
						value={category}
						onChange={(e) => handleChange(e)} >
						{categories.map((option) => (
							<MenuItem key={option.label} value={option.label}>
								{option.value}
							</MenuItem>
			            ))}
			        </TextField>
				</ThemeProvider>				
			</div>
		</div>
	)
}

export default Header