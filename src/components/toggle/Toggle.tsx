import React, { useState, useEffect, useRef } from 'react';

interface ToggleProps {
  defaultValue?: string | boolean;
  values?: string[];
  labels?: string[];
  onChange?: (isEnabled: boolean, value: string) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  defaultValue = false,
  values = ['Off', 'On'],
  labels = ['Off', 'On'],
  onChange = () => {},
}) => {
  const initialBooleanValue: boolean = (() => {
    if (typeof defaultValue === 'boolean') {
      return defaultValue;
    }
    const index = values.indexOf(defaultValue);
    return index !== -1 ? Boolean(index) : false;
  })();

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(initialBooleanValue);

  const toggleValue = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    const valueIndex = newValue ? 1 : 0;
    const selectedValue = values[valueIndex] || '';
    onChange(newValue, selectedValue);
  };

  useEffect(() => {
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;
    const bgEl = bgRef.current;

    if (leftEl && rightEl && bgEl) {
      if (isEnabled) {
        bgEl.style.left = `${rightEl.offsetLeft}px`;
        bgEl.style.width = `${rightEl.offsetWidth}px`;
      } else {
        bgEl.style.left = `${leftEl.offsetLeft}px`;
        bgEl.style.width = `${leftEl.offsetWidth}px`;
      }
    }
  }, [isEnabled]);

  return (
    <div
      className="relative flex items-center gap-2 cursor-pointer overflow-hidden bg-gray-800 text-gray-900 h-10 rounded-md hover:bg-gray-700 transition-colors duration-100"
      onClick={toggleValue}
    >
      <div
        className="absolute top-0 bottom-0 bg-black z-10 rounded-md transition-all duration-100"
        ref={bgRef}
      ></div>

      {labels[0] && (
        <div
          ref={leftRef}
          className={`relative px-4 z-20 select-none transition-colors duration-100 ${
            isEnabled ? 'text-gray-400' : 'text-white'
          }`}
        >
          {labels[0]}
        </div>
      )}

      {labels[1] && (
        <div
          ref={rightRef}
          className={`relative px-4 -ml-2 z-20 select-none transition-colors duration-100 ${
            isEnabled ? 'text-white' : 'text-gray-400'
          }`}
        >
          {labels[1]}
        </div>
      )}
    </div>
  );
};
