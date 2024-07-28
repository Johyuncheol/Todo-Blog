"use client";
import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  fnc: () => void;
  state?: boolean;
}
const Button = ({ children, fnc, state = false }: ButtonProps) => {
  return (
    <button className={state ? styles.clicked : styles.btn} onClick={fnc}>
      {children}
    </button>
  );
};

export default Button;
