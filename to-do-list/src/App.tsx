import "./App.css";
import Tasks from "./components/Tasks.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col bg-linear-to-bl from-purple-950 to-blue-800 min-h-screen">
        <div className="flex flex-col justify-center items-center gap-4 p-4 select-none ">
          <h1 className="text-white font-bold font-inter text-3xl">Lista de Tarefas</h1>
          <input
            type="text"
            className="border border-white text-white focus:outline-none focus:ring-1 focus:ring-white rounded-md p-2 w-85"
            placeholder="Digite o título da tarefa"
          />
          <input
            type="text"
            className="border border-white text-white focus:outline-none focus:ring-1 focus:ring-white rounded-md p-2 w-85"
            placeholder="Digite a descrição da tarefa"
          />
          <button className="border rounded-md cursor-pointer w-85 bg-white font-bold">
            Adicionar Tarefa
          </button>
        </div>
        <div className="mt-4">
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
