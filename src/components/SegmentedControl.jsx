import React, { useCallback, useState } from 'react';

/**
 * @typedef {Object} Segment
 */

/**
 * @param {string} label
 * @param {boolean} isSelected
 * @param {number} index
 * @param {(value: number) => void} onSelectSegment
 */
function Segment({ label, isSelected, index, onSelectSegment }) {
  /**
   * @returns {void}
   */
  const handleClick = useCallback(() => {
    onSelectSegment(index);
  });

  return (
    <button
      className={`flex-1 cursor-pointer rounded-[6px] px-3.5 py-1.25 ${isSelected ? 'bg-white text-neutral-900' : 'text-[#a4a4a4]'}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

/**
 * @typedef {Object} SegmentedControl
 */

/**
 * @param {string[]} segments
 * @param {number} selectedSegmentIndex
 * @param {(value: number) => void} onSelectSegment
 */
export function SegmentedControl({ segments, selectedSegmentIndex, onSelectSegment }) {
  const handleSelectSegment = useCallback(index => {
    onSelectSegment(index);
  });

  return (
    <div className="flex w-60 rounded-md bg-neutral-50 p-0.5">
      {segments.map((segment, index) => (
        <Segment
          key={index}
          label={segment}
          index={index}
          isSelected={index === selectedSegmentIndex ? true : false}
          onSelectSegment={handleSelectSegment}
        />
      ))}
    </div>
  );
}
