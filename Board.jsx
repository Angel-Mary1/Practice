import { useState } from "react";


const Board = ({index, task, taskList, setTaskList})=>
{
    const deletetask= ()=>
        {
            let removeIndex= taskList.indexOf(task);
            taskList.splice(removeIndex, 1);
            setTaskList( taskLists =>taskLists.filter(
                todo=> index===removeIndex
            ))
        }
    return(
     <>
     <div className="max-w-xl flex flex-col items-center justify-center border">
        <p>{task}</p>
        <button className="bg-red-500" onClick={deletetask}>delete</button>
     </div>
     </>
 );
}

export default Board;


