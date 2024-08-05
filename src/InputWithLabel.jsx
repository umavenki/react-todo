import { useEffect, useRef } from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label>{children}</label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
}
export default InputWithLabel;
