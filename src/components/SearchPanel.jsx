import React from 'react';
import AppFilter from './AppFilter';

export default function SearchPanel() {
	return (
		<div className='search-panel d-flex justify-content-between  mb-2'>
			<input type='text' placeholder='Search...' />
			<AppFilter />
		</div>
	);
}
