import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';
import TodoListItem from './TodoListItem';

export default function TodoList() {
	const { todos } = useContext(CustomContext);
	return (
		<ul className='list-group todo-list'>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} {...todo} />
			))}
		</ul>
	);
}
