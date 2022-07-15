import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';

export default function AppHeader() {
	const { todos } = useContext(CustomContext);
	const toDo = todos.filter((todo) => !todo.done).length;
	const done = todos.filter((todo) => todo.done).length;
	return (
		<header className='app-header d-flex align-items-end justify-content-between mb-3'>
			<h1 className='mr-2'>My Todo List</h1>
			<h2>
				<strong>{toDo}</strong> more to do, <strong>{done}</strong> done
			</h2>
		</header>
	);
}
