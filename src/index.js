import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Pick Pratap from Airport today", completed: true },
  { id: "todo-1", name: "Meeting on 20/10-2020  at 10:00AM", completed: false },
  { id: "todo-2", name: "Daily standup at 11:00AM", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
