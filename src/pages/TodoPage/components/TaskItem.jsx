import React, { useCallback, useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import iconPenSquare from '@/assets/images/icon-pen-square.svg';
import iconTrash from '@/assets/images/icon-trash.svg';

/**
 * @typedef {Object} TaskItem
 */

/**
 * @param {{id: string, name: string, isCompleted: boolean}[]} tasks
 * @param {(value: boolean, value: object) => void} onCheckboxToggleCompletion
 * @param {(value: string, value: number) => void} onSuccessChangeTask
 * @param {(value: object) => void} onClickDelete
 */
export function TaskItem({ tasks, onCheckboxToggleCompletion, onSuccessChangeTask, onClickDelete }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [inputValue, setInputValue] = useState('');

  /**
   * @param {boolean} isCheckboxChecked
   * @param {{id: string, name: string, isCompleted: boolean}} item
   */
  const handleToggleCompletion = useCallback((isCheckboxChecked, item) => {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  });

  /**
   * @param {{id: string, name: string, isCompleted: boolean}} task
   */
  const handleClickEdit = useCallback(task => {
    setEditingTaskId(prevId => task.id);
  });

  /**
   * @param {Event} e
   */
  const handleChangeInputValue = useCallback(e => {
    const value = e.currentTarget.value;
    setInputValue(prevValue => value);
  });

  /**
   * @param {Event} e
   */
  const handleKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      onSuccessChangeTask(inputValue, editingTaskId);
      setEditingTaskId(prevId => null);
      setInputValue(prevValue => '');
    }
  });

  /**
   * @param {{id: string, name: string, isCompleted: boolean}} task
   */
  const handleClickDelete = useCallback(task => {
    onClickDelete(task);
  });

  return (
    <>
      {tasks.map(task => (
        <li key={task.id} className="group">
          <div
            className={`flex items-center gap-3 rounded-md border border-neutral-100 p-4.5 ${task.isCompleted && 'bg-[#F9F9F9] line-through'}`}
          >
            <Checkbox item={task} onToggleCompletion={handleToggleCompletion} />

            {editingTaskId === task.id ? (
              <input
                type="text"
                placeholder="Input new task name here"
                className="flex-1 border-none outline-none"
                onChange={handleChangeInputValue}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span className="flex-1">{task.name}</span>
            )}

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
