import React from "react";
import styles from "./Button.module.css";

function Button({ text, width, onClick }) {
  return (
    <div className={styles.buttonDiv}>
      <button
        style={{
          width: width,
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
