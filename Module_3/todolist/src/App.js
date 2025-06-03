import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiCrosshair, BiSolidTrash, BiPencil } from "react-icons/bi";

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);


  const addTask = () => {
    if (task.trim() === '') return;

    setTodos([...todos, { text: task }])
    setTask('')
  }

  const update = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed
    setTodos(updated)
  }

  const deleteTask = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      const deleted = todos.filter((_, i) => i !== index)
      setTodos(deleted)
    }
  }
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div className='card shadow border-0 p-4 mt-2'>
          <div className='d-flex gap-4 m-auto'>
            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
            <button className="btn add_btn" onClick={addTask}><BiCrosshair /></button>
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
              <li key={index} className='p-3 d-flex'>
                {todo.text}
                <span className='ms-auto me-0'>
                  <button className='btn btn-success me-2' onClick={() => update(index)}>
                    <BiPencil />
                  </button>
                  <button className='btn btn-danger me-2' onClick={() => deleteTask(index)}>
                    <BiSolidTrash />
                  </button>
                  <button className='btn btn-outline-danger' onClick={() => {
                    setDeleteIndex(index);
                    setShowModal(true);
                  }}>
                    <BiSolidTrash />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {showModal && (
        <div className='overlay'>
          <div className='modal'>
            <div className='modal-content'>
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete this task?</p>
              <div className='d-flex gap-4'>
                <button onClick={() => {
                  const updated = todos.filter((_, i) => i !== deleteIndex);
                  setTodos(updated);
                  setShowModal(false);
                  setDeleteIndex(null);
                }} className='btn btn-success'>
                  Yes, Delete
                </button>
                <button onClick={() => {
                  setShowModal(false);
                  setDeleteIndex(null);
                }} className='btn btn-danger'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
