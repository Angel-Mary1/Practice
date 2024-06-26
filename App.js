import { useEffect, useState } from 'react';
import './App.css';

import Inputbox from './Inputbox';

function App(){
  const[taskList, setTaskList]= useState([]);
  return(
    <>
    <div className="app">
    <h1> Type Here</h1>
    <Inputbox taskList={taskList} setTaskList={setTaskList} />
    {taskList.length > 0 && (
          <ul className="taskitem"  style={{ listStyleType: 'none' }}>
            {taskList.map((task, index) => (
              <li key={index}>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
