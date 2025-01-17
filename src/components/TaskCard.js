import React from 'react';

const TaskCard = ({ task, updateTaskStatus, deleteTask }) => {
  const handleMove = (direction) => {
    const newStatus =
      direction === 'forward'
        ? task.status === 'To Do'
          ? 'In Progress'
          : 'Done'
        : task.status === 'Done'
        ? 'In Progress'
        : 'To Do';
    updateTaskStatus(task.id, newStatus);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <p>{task.name}</p>
      <button onClick={() => handleMove('backward')} disabled={task.status === 'To Do'}>
        Back
      </button>
      <button onClick={() => handleMove('forward')} disabled={task.status === 'Done'}>
        Forward
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
