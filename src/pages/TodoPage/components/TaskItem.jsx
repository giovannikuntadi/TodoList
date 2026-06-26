import { Checkbox } from '@/components/Checkbox';
import iconPenSquare from '@/assets/images/icon-pen-square.svg';
import iconTrash from '@/assets/images/icon-trash.svg';

export function TaskItem({ tasks, onCheckboxToggleCompletion }) {
  function handleToggleCompletion(isCheckboxChecked, item) {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  }

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <div
            className={`flex items-center gap-3 rounded-md border border-neutral-100 p-4.5 ${task.isCompleted && 'bg-[#F9F9F9] line-through'}`}
          >
            <Checkbox onToggleCompletion={handleToggleCompletion} item={task} />
            <span className="flex-1">{task.name}</span>
            <div className="flex items-center gap-3">
              <button className="cursor-pointer">
                <img src={iconPenSquare} alt="Icon edit task" />
              </button>
              <button className="cursor-pointer">
                <img src={iconTrash} alt="Icon delete task" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
