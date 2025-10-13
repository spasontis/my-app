import styles from "./header.module.css";

export const Header = ({ label }: { label: string }) => {
  return (
    <header>
      <div className={styles.storybook_header}>
        <div>
          <h1>{label}</h1>
        </div>
      </div>
    </header>
  );
};
