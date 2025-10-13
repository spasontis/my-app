import { useTranslations } from "next-intl";
import styles from "./header.module.css";

export const Header = ({ label }: { label: string }) => {
  const t = useTranslations("");
  return (
    <header>
      <div className={styles.storybook_header}>
        <div>
          <h1>{t(label)}</h1>
        </div>
      </div>
    </header>
  );
};
