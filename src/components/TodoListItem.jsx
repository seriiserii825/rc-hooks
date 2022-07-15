import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';

export default function TodoListItem(props) {
	const { id, title, important = false, done = false } = props;
	const { removeTodo, toggleImportant, toggleDone } =
		useContext(CustomContext);
	let style = {
		color: important ? 'tomato' : 'black',
		background: done ? 'lightgreen' : 'transparent',
	};
	return (
		<li className='todo-list-item list-group-item' style={style}>
			<h6 onClick={() => toggleDone(id)}>{title}</h6>
			<button
				className='button button--danger ml-auto mr-1'
				onClick={() => removeTodo(id)}>
				Remove
			</button>
			<button
				className='button button--success'
				onClick={() => toggleImportant(id)}>
				Important
			</button>
		</li>
	);
}
