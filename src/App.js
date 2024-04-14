import { IoReturnDownBackOutline } from "react-icons/io5";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {

	function geriAl() {
		console.log('hello world');
	}
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1 className="d-flex justify-content-between">
				<span>My Todo List </span>
				<IoReturnDownBackOutline role='button' className="fs-1" onClick={geriAl} />
			</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;