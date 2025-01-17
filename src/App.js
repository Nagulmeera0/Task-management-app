import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'To Do' }]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to update task status
  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TaskList
          tasks={tasks.filter((task) => task.status === 'To Do')}
          title="To Do"
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
        <TaskList
          tasks={tasks.filter((task) => task.status === 'In Progress')}
          title="In Progress"
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
        <TaskList
          tasks={tasks.filter((task) => task.status === 'Done')}
          title="Done"
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
