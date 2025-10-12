import { Button } from "@/shared/components/Button";
import styles from "./header.module.css";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className={styles.storybook_header}>
      <div>
        <h1>My app</h1>
      </div>
      <div>
        <Button onClick={onLogin} label="Log in" />
      </div>
    </div>
  </header>
);
