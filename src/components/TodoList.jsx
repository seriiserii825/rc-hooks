import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';
import TodoListItem from './TodoListItem';

export default function TodoList() {
	const { todos, filter } = useContext(CustomContext);
	let filteredTodos = [];

	switch (filter) {
		case 'all':
			filteredTodos = todos;
			break;
		case 'active':
			filteredTodos = todos.filter((todo) => !todo.done);
			break;
		case 'done':
			filteredTodos = todos.filter((todo) => todo.done);
			break;
		default:
			filteredTodos = todos;
			break;
	}

	return (
		<ul className='list-group todo-list'>
			{filteredTodos.map((todo) => (
				<TodoListItem key={todo.id} {...todo} />
			))}
		</ul>
	);
}
