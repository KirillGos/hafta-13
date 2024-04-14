import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const vekilFonksiyon = useDispatch();
	
	const onSubmit = (event) => {
		event.preventDefault();
		if ( value ) {
			vekilFonksiyon( addTodo({title: value}) )
			setValue('')
		}
	};
	const todoArray = useSelector(state => state.todos);

	function sirala() {
		document.querySelector('.list-group').innerHTML = ''
		 todoArray.toSorted((a, b) =>
		a.title.localeCompare(b.title)).map((item)=> {
			vekilFonksiyon(addTodo({title: item.title}))
		})
	}
	
	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Ekle
			</button> 
			<button onClick={() => console.log(sirala())}>Sırala</button>
		</form>
	);
};

export default AddTodoForm;
