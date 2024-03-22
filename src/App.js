import './App.css';
import Form from './components/Form';
import { useEffect, useState,useRef } from 'react';
import dataini from './components/initialdata.json'
import Todo from './components/Todo';
import FilterButton from './components/FilterButton'

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

function App() {
  const [tasks, setTasks] = useState(dataini);
  const [filter, setFilter] = useState("All");

  console.log(dataini)
  useEffect(()=>{
    console.log(tasks)
  })
function len(){
  return tasks.length
}
  function addTask(name) {
    const newTask = { id: "todo-" +len(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // Copy the task and update its name
        return { ...task, name: newName };
      }
      // Return the original task if it's not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks?.filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const listHeadingRef = useRef(null);
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  /////////////////////////filter///////////////////////////////////////


  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  

  return (
    <div className="todoapp stack-large">
    <h1>TodoMatic</h1>
    <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">{filterList}</div>
    <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
        role="list"
      >
        {taskList}
      </ul>
  </div>

  )
}

export default App

