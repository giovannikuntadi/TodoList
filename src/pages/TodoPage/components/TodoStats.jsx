import { StatWidget } from '@/components/StatWidget';
import iconListClipboard from '@/assets/images/icon-list-clipboard.svg';
import iconListLayout from '@/assets/images/icon-list-layout.svg';
import iconSquareCheck from '@/assets/images/icon-square-check.svg';

/**
 * @typedef {Object} TodoStats
 */

/**
 * @param {number} total
 * @param {number} ongoing
 * @param {number} completed
 */
export function TodoStats({ total, ongoing, completed }) {
  return (
    <section className="flex gap-1.5 px-4.5 pb-2.5">
      <StatWidget variant={'ALL'} icon={iconListClipboard} label={'Task'} count={total} />
      <StatWidget variant={'ONGOING'} icon={iconListLayout} label={'Active'} count={ongoing} />
      <StatWidget variant={'DONE'} icon={iconSquareCheck} label={'Done'} count={completed} />
    </section>
  );
}
