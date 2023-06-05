import React, { ChangeEvent, useState } from "react";

export default function useNumberInput(
  defaultValue: number
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: React.KeyboardEvent<HTMLInputElement>) => void
] {
  const [inputValue, setInputValue] = useState(String(defaultValue));

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [
    inputValue,
    handleChangeInput,
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const permittedKeys = ["Backspace", "Meta", "ArrowLeft", "ArrowRight"];

      if (permittedKeys.includes(e.key)) return;

      const isValid = /\d/.test(e.key);

      if (!isValid) {
        e.preventDefault();
      }
    },
  ];
}
