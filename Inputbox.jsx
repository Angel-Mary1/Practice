import { useState } from "react"
const Inputbox = ({taskList, setTaskList})=>
{
    const[input, setInput] = useState('');
    console.log(taskList, setTaskList);

     const handleAddtask = (e)=>
        {
            e.preventDefault();
            setTaskList([...taskList, input]);
            setInput("");
        }
        const cleartask = (e)=>{
            e.preventDefault();
            taskList.splice(0, taskList.length);   
            setTaskList([taskList]);
        }

    return(
       <>
       <form>
        <input className=" border rounde px-2 "
           type="text"
           placeholder="add a task" 
           value ={input} 
           onChange={(e)=>setInput(e.target.value)}>
        </input>
        <button onClick={handleAddtask}> Add </button>
        <button onClick={cleartask}> clear </button>
       </form>
       </>
    )
}

export default Inputbox