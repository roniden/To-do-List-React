import type { Task } from "../types/types.ts";

interface TasksProps {
  tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const tasksCompleted = tasks.filter((tasks) => tasks.isCompleted);

  return (
    <div className="flex flex-col gap-4 p-4 rounded-tl-4xl shadow-md bg-white min-h-screen">
      <h2 className="inline-flex text-left font-bold relative pb-2 w-auto font-[Inter]">
        TAREFAS
        <span className="absolute bottom-2 left-0 w-18 h-0.5 bg-purple-700 rounded-lg"></span>
      </h2>
      <div className="flex gap-2">
        <span className="border border-gray-500 rounded-md p-2 shadow-md font-[inter]">
          {tasksCompleted.length}
          {tasksCompleted.length > 1 || tasksCompleted.length == 0
            ? " Completas 🏆"
            : " Completa 🏆"}
        </span>
        <span className="border border-gray-500 rounded-md p-2 shadow-md font-[inter]">
          {tasks.length - tasksCompleted.length}
          {tasks.length > 1 || tasks.length == 0
            ? " Pendentes 📅"
            : " Pendente 📅"}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex bg-[#313d5a] rounded-sm p-2 h-10 items-center font-bold text-[14px] font-[Inter] shadow-sm text-white"
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
