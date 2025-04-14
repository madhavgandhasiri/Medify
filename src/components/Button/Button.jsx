import React from "react";
import styles from "./Button.module.css";

function Button({ text, width }) {
  return (
    <div className={styles.buttonDiv}>
      <button
        style={{
          width: width,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
