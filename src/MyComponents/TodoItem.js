import React from 'react'


// using destructuring
// const TodoItem = ({todo,onDelete}) => {
// 	return (
// 		<div className="py-4">
// 		    <h4>{todo.title}</h4>
// 			<p>{todo.desc}</p>
// 			<button className="btn btn-danger btn-sm" key={todo.sno} onClick={() => {onDelete(todo)}}>Delete</button>
// 		</div>
// 	)
// }


// using props
const TodoItem = (props) => {
	return (
		<div className="py-2">
		    <h5>{props.todo.title}</h5>
			<p>{props.todo.desc}</p>
			<button className="btn btn-danger btn-sm" key={props.todo.sno}  onClick={() => {props.onDelete(props.todo)}}>Delete</button><hr/>
		</div>
	)
}

export default TodoItem