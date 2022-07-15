import React from 'react';

export default function TodoListItem(props) {
	const { title, important = false } = props;
	let style = {
		color: important ? 'tomato' : 'black',
	};
	return (
		<li className='todo-list-item list-group-item' style={style}>
			<h6>{title}</h6>
			<button className='button button--danger ml-auto mr-1'>Remove</button>
			<button className='button button--success'>Important</button>
		</li>
	);
}
