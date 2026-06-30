import React, { useCallback, useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import iconPenSquare from '@/assets/images/icon-pen-square.svg';
import iconTrash from '@/assets/images/icon-trash.svg';

export function TaskItem({ tasks, onCheckboxToggleCompletion, onClickEdit, onClickDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const handleToggleCompletion = useCallback((isCheckboxChecked, item) => {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  });

  const handleClickEdit = useCallback((task) => {
    setSelectedId((prevId) => task.id, console.log(selectedId));
  });

  const handleClickDelete = useCallback((key) => {
    onClickDelete(key);
  });

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} className="group" isEdit={false}>
          <div
            className={`flex items-center gap-3 rounded-md border border-neutral-100 p-4.5 ${task.isCompleted && 'bg-[#F9F9F9] line-through'}`}
          >
            <Checkbox onToggleCompletion={handleToggleCompletion} item={task} />

            {isEditing ? <input placeholder="Task name" /> : <span className="flex-1">{task.name}</span>}

            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100">
              <button className="cursor-pointer" onClick={() => handleClickEdit(task)}>
                <img src={iconPenSquare} alt="Icon edit task" />
              </button>
              <button className="cursor-pointer" onClick={() => handleClickDelete(task)}>
                <img src={iconTrash} alt="Icon delete task" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
