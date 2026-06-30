import iconCheck from '@/assets/images/icon-check.svg';
import { useCallback, useState } from 'react';

export function Checkbox({ onToggleCompletion, item }) {
  const [isChecked, setIsChecked] = useState(item.isCompleted);

  const handleClick = useCallback(() => {
    const isCheckboxChecked = !isChecked;
    setIsChecked(isCheckboxChecked);
    onToggleCompletion(isCheckboxChecked, item);
  });

  return (
    <span
      className={`flex size-5 cursor-pointer items-center justify-center rounded-[6px] border ${isChecked ? 'border-[#0088FF]' : 'border-[#D0D5DD]'}`}
      onClick={handleClick}
    >
      {isChecked && <img src={iconCheck} alt="Icon checkbox checked" />}
    </span>
  );
}
