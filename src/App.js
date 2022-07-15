import './App.css';
import { Context } from './hooks/Context';
import { Todo } from './pages/Todo';

function App() {
	return (
		<Context>
			<div className='App'>
				<Todo />
			</div>
		</Context>
	);
}

export default App;
