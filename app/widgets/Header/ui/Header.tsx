import React, { type FC } from "react";
import styles from "./Header.module.css";
import { Icon } from "@/app/components/ui/Icon";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>BitTest</div>
        <div className={styles.navigation}>
          <div className={styles.tag}>
            <Icon className={styles.icon} id="briefcase" />
          </div>
          <span>Моя организация</span>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userAvatar} />
        <div className={styles.userInfo}>
          <div className={styles.userIsAuth}></div>
          <div className={styles.userRole}></div>
        </div>
      </div>
    </header>
  );
};
