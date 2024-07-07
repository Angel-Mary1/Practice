import { useEffect, useState } from 'react';
import './App.css';

import Inputbox from './Inputbox';
import Board from './Board.jsx';

function App(){
  const[taskList, setTaskList] = useState([]);
  return(
    <>
    <div className="app">
    <h1> Type Here</h1>
    <Inputbox taskList={taskList} setTaskList={setTaskList} />
    </div>
    
          <div className="grid grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
          {taskList.map((task, index) => (
          <Board key={index} index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
        ))}
          </div>
    </>
  );
}

export default App;
