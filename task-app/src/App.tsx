import React,{Fragment, useState} from 'react';
type FormElement = React.FormEvent<HTMLFormElement>;
function nextRole () {
  return {
    position: "Full stack dev",
    age: 18,
    name: "Martin",
    salary: "60k - 100k usd"
  }
}
function App() {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: FormElement) =>{
    e.preventDefault();
    console.log (newTask);

  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h1>Rol: {nextRole().position} </h1>
        <h1>Nombre: {nextRole().name}</h1>
        <h1>Salario: {nextRole().salary}</h1>
        <input type = "text" onChange = {e => setNewTask(e.target.value)}/>
        <button>
          Save
        </button>
      </form>
    </Fragment>
  );
}

export default App;
