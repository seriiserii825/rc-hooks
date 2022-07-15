import React, { useContext, useState } from 'react';
import { CustomContext } from '../hooks/Context';
import AppFilter from './AppFilter';

export default function SearchPanel() {
	const { searchTodo } = useContext(CustomContext);
	const [search, setSearch] = useState('');

	const onSearch = (e) => {
		setSearch(e.target.value);
		searchTodo(e.target.value);
	};

	return (
		<div className='search-panel d-flex justify-content-between  mb-2'>
			<input
				onInput={onSearch}
				value={search}
				type='text'
				placeholder='Search...'
			/>
			<AppFilter />
		</div>
	);
}
