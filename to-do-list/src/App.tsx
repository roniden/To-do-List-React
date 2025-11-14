import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4 select-none'>
        <h1 className='text-2xl'>Lista de Tarefas</h1>
        <input type="text" className='border rounded-md p-2 w-85' placeholder='Digite o título da tarefa'/>
        <input type="text" className='border rounded-md p-2 w-85' placeholder='Digite a descrição da tarefa'/>
        <button className='border rounded-md p-2 cursor-pointer w-85'>Adicionar Tarefa</button>
      </div>
    </>
  );
}

export default App;