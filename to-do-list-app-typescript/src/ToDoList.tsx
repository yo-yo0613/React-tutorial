import  { useState, ChangeEvent } from 'react';

function App() {
  
  // State types
  const [tasks, setTasks] = useState<string[]>(["Eat Breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState<string>("");

  // Event handlers for input changes
  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      setNewTask(event.target.value);
  }

  // Add task function
  function addTask(){
      if(newTask.trim() !==""){
          setTasks(t => [...t, newTask]);
          setNewTask("");
      }
  }

  // Delete task function
  function deleteTask(index: number){

      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
  }

  // Move task up function
  function moveTaskUp(index: number){
      if(index > 0){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = 
          [updatedTasks[index - 1], updatedTasks[index]]
          setTasks(updatedTasks);
      }
  }

  // Move task down function
  function moveTaskDown(index: number){
      if(index < tasks.length - 1){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index + 1]] = 
          [updatedTasks[index + 1], updatedTasks[index]]
          setTasks(updatedTasks);
      }
  }
  
  
  return (
    <>
      <div className='to-do-list'>

<h1>To-Do-List</h1>

<div>
    <input type="text" 
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}/>
    <button
        className='add-button'
        onClick={addTask}>
        Add
    </button>    
</div>


<ol>
    {tasks.map((task, index) => 
        <li key={index}>
            <span className='text'>{task}</span>
            <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                Delete
            </button>
            <button
                className='move-button'
                onClick={() => moveTaskUp(index)}>
                ☝
            </button>
            <button
                className='move-button'
                onClick={() => moveTaskDown(index)}>
                👇
            </button>
        </li>
    )}
</ol>
</div>
    </>
  )
}

export default App