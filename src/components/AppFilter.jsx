import React from 'react';

export default function AppFilter() {
	return (
		<div className='search-panel__buttons d-flex'>
			<button className='btn btn-primary'>All</button>
			<button className='btn btn-outline-dark'>Active</button>
			<button className='btn btn-outline-dark'>Done</button>
		</div>
	);
}
