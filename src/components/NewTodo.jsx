import React, { useState, useContext } from 'react';
import { CustomContext } from '../hooks/Context';

export default function NewTodo() {
	const [value, setValue] = useState('');
	const { addTodo } = useContext(CustomContext);

	function updateValue(e) {
		setValue(e.target.value);
	}
	function addNewTodo(e) {
		if (e.code === 'Enter') {
			addTodo(value);
			setValue('');
		}
	}
	return (
		<div className='new-todo d-flex justify-content-between'>
			<input
				type='text'
				onInput={updateValue}
				value={value}
				placeholder='Add new todo...'
				onKeyDown={addNewTodo}
			/>
		</div>
	);
}
