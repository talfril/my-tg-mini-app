import clsx from "clsx";
import styles from "./Button.module.css";
import { ButtonProps } from "@/data/types";


export const Button = ({
  onClick,
  buttonText,
  buttonType = "button",
  disabled,
  className,
}: ButtonProps) => (
  <button
    className={clsx(styles.button, className)} 
    onClick={onClick}
    type={buttonType}
    disabled={disabled}
  >
    {buttonText}
  </button>
);
