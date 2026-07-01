import { SegmentedControl } from '@/components/SegmentedControl';
import { TaskList } from './TaskList';
import { useCallback } from 'react';

/**
 * @typedef {Object} TodoMain
 */

/**
 * @param {{id: string, name: string, isCompleted: boolean}[]} tasks
 * @param {string[]} segments
 * @param {number} selectedSegmentIndex
 * @param {(value: number) => void} onSelectSegment
 * @param {(value: boolean, value object[]) => void} onCheckboxToggleCompletion
 * @param {(value: string, value: number) => void} onSuccessChangeTask
 * @param {(value: object) => void} onClickDeleteTask
 */
export function TodoMain({
  tasks,
  segments,
  selectedSegmentIndex,
  onSelectSegment,
  onCheckboxToggleCompletion,
  onSuccessChangeTask,
  onClickDeleteTask,
}) {
  /**
   * @param {number} index
   */
  const handleSelectSegment = useCallback(index => {
    onSelectSegment(index);
  });

  /**
   * @param {boolean} isCheckboxChecked
   * @param {{id: string, name: string, isCompleted: string}[]} item
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
   * @param {{id: string, name: string, isCompleted: boolean}} selectedTask
   */
  const handleClickDeleteTask = useCallback(selectedTask => {
    onClickDeleteTask(selectedTask);
  });

  return (
    <section className="flex h-106 flex-col p-2">
      <div className="rounded-t-xl border border-neutral-100 bg-white p-3">
        <SegmentedControl
          segments={segments}
          selectedSegmentIndex={selectedSegmentIndex}
          onSelectSegment={handleSelectSegment}
        />
      </div>
      <div
        className={`flex flex-1 flex-col ${tasks.length === 0 ? 'items-center justify-center gap-4.5' : 'scrollbar-none overflow-y-scroll p-3'} rounded-b-xl border-x border-b border-neutral-100 bg-white`}
      >
        <TaskList
          tasks={tasks}
          onCheckboxToggleCompletion={handleCheckboxToggleCompletion}
          onSuccessChangeTask={handleSuccessChangeTask}
          onClickDeleteTask={handleClickDeleteTask}
        />
      </div>
    </section>
  );
}
