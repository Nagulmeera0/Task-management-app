import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, title, updateTaskStatus, deleteTask }) => {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
