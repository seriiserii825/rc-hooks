import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';

export default function AppFilter() {
	const { filterAll, filterActive, filterDone } = useContext(CustomContext);
	return (
		<div className='search-panel__buttons d-flex'>
			<button className='btn btn-primary' onClick={filterAll}>
				All
			</button>
			<button className='btn btn-outline-dark' onClick={filterActive}>
				Active
			</button>
			<button className='btn btn-outline-dark' onClick={filterDone}>
				Done
			</button>
		</div>
	);
}
