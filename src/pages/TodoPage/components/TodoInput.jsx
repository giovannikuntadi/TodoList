import iconPenLine from '@/assets/images/icon-pen-line.svg';
import iconPlusDisabled from '@/assets/images/icon-plus-disabled.svg';
import iconPlusEnabled from '@/assets/images/icon-plus-enabled.svg';
import { useCallback, useState } from 'react';

/**
 * @typedef {Object} TodoInput
 */

/**
 * @param {() => void} onClickAddButton
 */
export function TodoInput({ onClickAddButton }) {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  /**
   * @param {Event} e
   */
  const handleChangeOnInput = useCallback(e => {
    const value = e.target.value;
    value.length !== 0 ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
    setInputValue(value);
  });

  /**
   * @returns {void}
   */
  const handleClickAdd = useCallback(() => {
    onClickAddButton(inputValue);
    setInputValue('');
    setIsButtonDisabled(true);
  });

  return (
    <section className="flex items-center gap-3 px-4.5 py-2.5">
      <img src={iconPenLine} alt="Icon pen line" className="size-4.5" />
      <input
        type="text"
        className="flex-1 border-none outline-none"
        value={inputValue}
        placeholder="Add a new task..."
        onChange={handleChangeOnInput}
      />
      <button
        disabled={isButtonDisabled}
        className={`flex gap-1.5 rounded-md ${isButtonDisabled ? 'cursor-not-allowed bg-neutral-100 text-[#c4c4c4]' : 'cursor-pointer bg-black text-white'} px-2.5 py-1.5`}
        onClick={handleClickAdd}
      >
        <img src={iconPlusDisabled} alt="Icon plus disabled" />
        Add
      </button>
    </section>
  );
}
