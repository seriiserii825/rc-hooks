import React from 'react';
import AppHeader from '../components/AppHeader';
import NewTodo from '../components/NewTodo';
import SearchPanel from '../components/SearchPanel';
import TodoList from '../components/TodoList';

export function Todo() {
	return (
		<div className='todo p-4'>
			<AppHeader />
			<SearchPanel />
			<TodoList />
			<NewTodo />
		</div>
	);
}
