import { TodoStats } from './components/TodoStats';
import { TodoInput } from './components/TodoInput';
import { TodoMain } from './components/TodoMain';
import { useCallback, useState } from 'react';
import { Task } from '@/data/models/Task';

export function TodoPage() {
  const [tasks, setTasks] = useState([
    new Task('Implementasi halaman Register', false),
    new Task('Build halaman Dashboard', false),
    new Task('Komponen To-Do List (Add, Edit, Delete Task)', true),
  ]);
  // const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  const Tasks = Object.freeze({
    ALL: tasks,
    ONGOING: tasks.filter((task) => !task.isCompleted),
    COMPLETED: tasks.filter((task) => task.isCompleted),
  });

  const Stats = Object.freeze({
    ALL: Tasks.ALL.length,
    ONGOING: Tasks.ONGOING.length,
    COMPLETED: Tasks.COMPLETED.length,
  });

  const Statuses = {
    ALL: 'All',
    ACTIVE: 'Active',
    COMPLETED: 'Completed',
  };

  const availableStatuses = [Statuses.ALL, Statuses.ACTIVE, Statuses.COMPLETED];

  const getVisibleTasks = useCallback((index) => {
    switch (index) {
      case 0:
        return Tasks.ALL;
        break;
      case 1:
        return Tasks.ONGOING;
        break;
      case 2:
        return Tasks.COMPLETED;
        break;
    }
  });

  const handleClickAddButton = useCallback((inputValue) => {
    setInputValue(inputValue);

    setTasks((prevTask) => {
      const newTask = new Task(inputValue, false);
      return [...prevTask, newTask];
    });
  });

  const handleSelectSegment = useCallback((index) => {
    if (selectedSegmentIndex !== index) {
      setSelectedSegmentIndex(index);
    }
  });

  const handleCheckboxToggleCompletion = useCallback((isCheckboxChecked, item) => {
    setTasks((prevTask) =>
      prevTask.map((task) => (task.id === item.id ? { ...task, isCompleted: isCheckboxChecked } : task)),
    );
  });

  const handleClickEditTask = useCallback((selectedTask) => {
    console.log(selectedTask);
  });

  const handleClickDeleteTask = useCallback((selectedTask) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTask.id));
  });

  return (
    <main className="mx-auto mt-9 flex h-165 w-150 flex-col rounded-3xl border-2 border-white bg-[#f9f9f9]">
      <h1 className="p-4.5 text-2xl font-semibold text-black">Todolist</h1>
      <TodoStats total={Stats.ALL} ongoing={Stats.ONGOING} completed={Stats.COMPLETED} />
      <TodoInput onClickAddButton={handleClickAddButton} />
      <TodoMain
        tasks={getVisibleTasks(selectedSegmentIndex)}
        selectedSegmentIndex={selectedSegmentIndex}
        segments={availableStatuses}
        onSelectSegment={handleSelectSegment}
        onCheckboxToggleCompletion={handleCheckboxToggleCompletion}
        onClickEditTask={handleClickEditTask}
        onClickDeleteTask={handleClickDeleteTask}
      />
    </main>
  );
}
