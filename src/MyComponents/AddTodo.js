import React from 'react';
import { useState } from "react";

const AddTodo = (props) => {


	const [title, setTitle] = useState("");
	// console.log([title, setTitle]);
	const [desc, setDesc] = useState("");
	// console.log([desc, setTitle]);

	const submit= (e) => {
		// to do not reload page
		e.preventDefault();

		if(!title || !desc) {
			alert("Title or Description can not be blank");
		}
		else{
			props.addTodo(title,desc);
			// title="";
			// desc="";


			// to clear textbox after clicking Addtodo button
			setTitle("");
			setDesc("");
		}

	}


	return (
		<div className="container">
			<h3 className="mb-4">Add Todo</h3>
			<form onSubmit={submit}>
			  <div className="mb-3">
			    <label htmlFor="todoTitle" className="form-label">Title</label>
			    {// when we set value attribute, need to add onchange event otherwise we do not type anything inside field
			     // so we declare onChange event to get ontime (changed-data) data of the field 
			    }
			    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="todoTitle" />
			  </div>
			  <div className="mb-3">
			    <label htmlFor="todoDesc" className="form-label">Description</label>
			    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="todoDesc" />
			  </div>
			  
			  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
			</form>
		</div>
	)
}

export default AddTodo