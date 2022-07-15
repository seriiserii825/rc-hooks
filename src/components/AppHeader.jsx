import React from 'react';

export default function AppHeader({ toDo, done }) {
	return (
		<header className='app-header d-flex align-items-end justify-content-between mb-3'>
			<h1 className='mr-2'>My Todo List</h1>
			<h2>
				{toDo} more to do, {done} done
			</h2>
		</header>
	);
}
