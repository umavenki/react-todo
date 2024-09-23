import { useEffect, useRef } from "react";
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

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
InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.string,
};
export default InputWithLabel;
