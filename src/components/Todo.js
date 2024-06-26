import React from 'react'
import { useEffect, useRef, useState } from "react";



const Todo = (props) => {
    const [isEditing, setEditing] = useState(false);
const [newName, setNewName] = useState("");
const [newDesc, setNewDesc] = useState("");

const editFieldRef = useRef(null);
const editButtonRef = useRef(null);

const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
        <label className="todo-label" htmlFor={props.id}>
          New description for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newDesc}
          onChange={handleChangex}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const editingTemplateD = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChangex}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="card">
    <div className="card-title">{props.name}</div>
    <div className="card-subtitle">{props.description}</div>
    <select id="myD" value={props.completed}  onChange={(e) => props.toggleTaskCompleted(props.id,e.target.value)} >
            <option value="completed" id="myD1" >Completed</option>
            <option value="not completed" id="myD2">Not Completed</option>
  </select>
    <hr className="card-divider"/>
    <div className="card-footer">
        <button className="card-btn" onClick={() => {setEditing(true);}}>Edit</button>
        <button className="card-btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
    
</div>
    /////////////////////////////////////////////////////////
    // <div className="stack-small">
    //   <div className="c-cb">
    //     <input
    //       id={props.id}
    //       type="checkbox"
    //       defaultChecked={props.completed}
    //       onChange={() => props.toggleTaskCompleted(props.id)}
    //     />
    //     <label className="todo-label" htmlFor={props.id}>
    //       {props.name}
    //     </label>
    //   </div>
    //   <div className="btn-group">
    //     <button
    //       type="button"
    //       className="btn"
    //       onClick={() => {
    //         setEditing(true);
    //       }}
    //       ref={editButtonRef}>
    //       Edit <span className="visually-hidden">{props.name}</span>
    //     </button>
    //     <button
    //       type="button"
    //       className="btn btn__danger"
    //       onClick={() => props.deleteTask(props.id)}>
    //       Delete <span className="visually-hidden">{props.name}</span>
    //     </button>
    //   </div>
    // </div>
  );
  function handleChange(event) {
    setNewName(event.target.value);
  }
  function handleChangex(event) {
    setNewDesc(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.editTask(props.id, newName,newDesc);
    setNewName("");
    setNewDesc("");
    setEditing(false);
  }
  

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo