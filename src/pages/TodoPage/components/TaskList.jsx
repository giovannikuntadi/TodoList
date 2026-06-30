import iconEmptyTask from '@/assets/images/icon-empty-task.svg';
import { TaskItem } from './TaskItem';
import { useCallback } from 'react';

export function TaskList({ tasks, onCheckboxToggleCompletion, onClickEditTask, onClickDeleteTask }) {
  const handleCheckboxToggleCompletion = useCallback((isCheckboxChecked, item) => {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  });

  const handleClickEdit = useCallback((selectedTask) => {
    onClickEditTask(selectedTask);
  });

  const handleClickDelete = useCallback((selectedTask) => {
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
              onClickEdit={handleClickEdit}
              onClickDelete={handleClickDelete}
            />
          </ul>
        </>
      )}
    </>
  );
}
