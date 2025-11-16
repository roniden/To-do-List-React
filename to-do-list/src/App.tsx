import "./App.css";
import Tasks from "./components/Tasks.tsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "./types/types.ts";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: "Estudar React",
      description: "Estudar React para me tornar um Dev front-end.",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Estudar SQL",
      description: "Estudar SQL para me tornar um Dev back-end.",
      isCompleted: false,
    },
  ]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  function onAddTask(title: string, description: string) {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <div className="flex flex-col bg-linear-to-bl from-purple-950 to-blue-800 min-h-screen">
        <div className="flex flex-col justify-center items-center gap-4 p-4 select-none ">
          <h1 className="text-white font-bold font-[Inter] text-3xl uppercase">
            Lista de Tarefas
          </h1>
          <form className="flex flex-col gap-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border border-white text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-white rounded-md p-1 w-85 font-[Inter]"
              placeholder="Digite o título da tarefa"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="border border-white text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-white rounded-md p-1 w-85 font-[Inter]"
              placeholder="Digite a descrição da tarefa"
            />
            <input
              type="submit"
              value="Adicionar"
              className="border rounded-lg cursor-pointer w-85 bg-white font-bold font-[Inter] text-[14px] p-1 border-none shadow-md"
              onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                e.preventDefault();
                onAddTask(title, description);
              }}
            />
          </form>
        </div>
        <div className="mt-4">
          <Tasks tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
