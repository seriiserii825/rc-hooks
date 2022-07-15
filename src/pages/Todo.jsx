import React from 'react';
import AppHeader from '../components/AppHeader';
import SearchPanel from '../components/SearchPanel';
import TodoList from '../components/TodoList';

export function Todo() {
	return (
		<div class="todo p-4">
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
}
