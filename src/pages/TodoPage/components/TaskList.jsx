import iconEmptyTask from '@/assets/images/icon-empty-task.svg';
import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onCheckboxToggleCompletion }) {
  function handleCheckboxToggleCompletion(isCheckboxChecked, item) {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  }

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
            <TaskItem tasks={tasks} onCheckboxToggleCompletion={handleCheckboxToggleCompletion} />
          </ul>
        </>
      )}
    </>
  );
}
