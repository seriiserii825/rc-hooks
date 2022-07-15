import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Js', done: false },
		{ id: 2, title: 'React', important: true, done: false },
		{ id: 3, title: 'Nodejs', done: false },
	]);
	const [filter, setFilter] = useState('all');

	const addTodo = (title) => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				title: title,
				important: false,
				done: false,
			},
		]);
	};
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleImportant = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.important = !todo.important;
				}
				return todo;
			})
		);
	};

	const toggleDone = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};

	const filterAll = () => {
		setFilter('all');
	};

	const filterActive = () => {
		setFilter('active');
	};

	const filterDone = () => {
		setFilter('done');
	};

	const value = {
		todos,
		addTodo,
		removeTodo,
		toggleImportant,
		toggleDone,
		filterAll,
		filterActive,
		filterDone,
		filter
	};

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};
