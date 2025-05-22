import React from "react";
import styles from "./Button.module.css";

function Button({ text, width, onClick, type = "button", id }) {
  return (
    <div className={styles.buttonDiv}>
      <button
        type={type}
        id={id}
        style={{ width }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
