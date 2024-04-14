import React from 'react';
import { useDispatch } from 'react-redux';
import { isiSil, tamamlandiAcKapa } from '../redux/todoSlice';
import { saveTodo } from '../redux/undoSlice';

const TodoItem = ({ id, title, completed }) => {
	const vekilFonksiyon = useDispatch()

	function tamamlandiIslem() {
		vekilFonksiyon( tamamlandiAcKapa({id, completed: !completed}) )
	}

	function isiSilIslemi() {
		vekilFonksiyon(saveTodo({title, id, completed}))
		vekilFonksiyon(isiSil({id: id}));
	}	


	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>

					<label>
						<input onChange={tamamlandiIslem} type='checkbox' className='form-check-input me-3' checked={completed} />
						{title}
					</label>
				</span>
				<button onClick={isiSilIslemi} className='btn btn-danger'>Sil</button>
			</div>
		</li>
	);
};

export default TodoItem;
