import iconEmptyTask from '@/assets/images/icon-empty-task.svg';
import { TaskItem } from './TaskItem';
import { useCallback } from 'react';

/**
 * @typedef {Object} TaskList
 */

/**
 * @param {{id: string, name: string, isCompleted: boolean}[]} tasks
 * @param {(value: boolean, value: object) => void} onCheckboxToggleCompletion
 * @param {(value: string, value: number) => void} onSuccessChangeTask
 * @param {(value: object) => void} onClickDeleteTask
 */
export function TaskList({ tasks, onCheckboxToggleCompletion, onSuccessChangeTask, onClickDeleteTask }) {
  /**
   * @param {boolean} isCheckboxChecked
   * @param {{id: string, name: string, isCompleted: boolean}} item
   */
  const handleCheckboxToggleCompletion = useCallback((isCheckboxChecked, item) => {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  });

  /**
   * @param {string} inputValue
   * @param {number} editingTaskId
   */
  const handleSuccessChangeTask = useCallback((inputValue, editingTaskId) => {
    onSuccessChangeTask(inputValue, editingTaskId);
  });

  /**
   * @param {{id: string, number: string, isCompleted: boolean}} selectedTask
   */
  const handleClickDelete = useCallback(selectedTask => {
    onClickDeleteTask(selectedTask);
  });

  return (
    <>
      {tasks.length === 0 ? (
        <>
          <div>
            <img src={iconEmptyTask} alt="Icon empty task" />
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <h2 className="leading-none font-semibold text-neutral-900">No tasks yet</h2>
            <p className="w-50 text-center text-sm font-normal text-[#A4A4A4]">
              Add your first task above to get started. Stay productive!
            </p>
          </div>
        </>
      ) : (
        <>
          <ul className="flex flex-col gap-2.5">
            <TaskItem
              tasks={tasks}
              onCheckboxToggleCompletion={handleCheckboxToggleCompletion}
              onSuccessChangeTask={handleSuccessChangeTask}
              onClickDelete={handleClickDelete}
            />
          </ul>
        </>
      )}
    </>
  );
}
