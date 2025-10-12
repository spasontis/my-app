import clsx from "clsx";
import styles from "./button.module.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={styles.storybook_button} {...props}>
      {label}
    </button>
  );
};
