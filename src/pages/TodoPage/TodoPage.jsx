import { TodoStats } from './components/TodoStats';
import { TodoInput } from './components/TodoInput';
import { TodoMain } from './components/TodoMain';
import { useState } from 'react';
import { Task } from '@/data/models/Task';

export function TodoPage() {
  const [tasks, setTasks] = useState([
    new Task('Implementasi halaman Register', false),
    new Task('Build halaman Dashboard', false),
    new Task('Komponen To-Do List (Add, Edit, Delete Task)', true),
  ]);
  // const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleClickAddButton(inputValue) {
    setInputValue(inputValue);

    setTasks((prevTask) => {
      const newTask = { name: inputValue, isCompleted: false };
      return [...prevTask, newTask];
    });
  }

  function handleCheckboxToggleCompletion(isCheckboxChecked, item) {
    setTasks((prevTask) =>
      prevTask.map((task) => (task.id === item.id ? { ...task, isCompleted: isCheckboxChecked } : task)),
    );
  }

  return (
    <main className="mx-auto mt-9 flex h-165 w-150 flex-col rounded-3xl border-2 border-white bg-[#f9f9f9]">
      <h1 className="p-4.5 text-2xl font-semibold text-black">Todolist</h1>
      <TodoStats
        total={tasks.length}
        ongoing={tasks.filter((task) => task.isCompleted !== true).length}
        completed={tasks.filter((task) => task.isCompleted !== false).length}
      />
      <TodoInput onClickAddButton={handleClickAddButton} />
      <TodoMain tasks={tasks} onCheckboxToggleCompletion={handleCheckboxToggleCompletion} />
    </main>
  );
}
