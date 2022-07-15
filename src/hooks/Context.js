import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Js' },
		{ id: 2, title: 'React', important: true },
		{ id: 3, title: 'Nodejs' },
	]);

	const addTodo = (title) => {
		setTodos([...todos, { id: todos.length + 1, title: title }]);
	};

	const value = {
		todos,
		addTodo,
	};

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};
