const WidgetStatus = Object.freeze({
  ALL: 'bg-linear-to-b from-[#CF8BF9] to-[#B264FD] text-[#F2C7FF]',
  ONGOING: 'bg-linear-to-b from-[#5F98FF] to-[#1865D5] text-[#82D0FF]',
  DONE: 'bg-linear-to-b from-[#85E980] to-[#4D9A44] text-[#D8F4D6]',
});

/**
 * @typedef {Object} StatWidget
 */

/**
 * @param {string} variant
 * @param {string} icon
 * @param {string} label
 * @param {number} count
 */
export function StatWidget({ variant, icon, label, count }) {
  return (
    <div className={`flex flex-1 flex-col gap-2 rounded-lg ${WidgetStatus[variant]} p-3`}>
      <div>
        <img src={icon} alt="Task Icon" />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-sm font-semibold">{label}</span>
        <span className="text-[40px] leading-none font-semibold">{count}</span>
      </div>
    </div>
  );
}
