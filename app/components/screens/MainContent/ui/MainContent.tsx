"use client";

import React, { useState, type FC } from "react";
import styles from "./MainContent.module.css";
import { Themes } from "@/lib/redux/slices/themeSlice/themes";
import { themeSlice, useSelector, useDispatch, selectTheme } from "@/lib/redux";

export const MainContent: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleToggleTheme = (): void => {
    dispatch(themeSlice.actions.toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleToggleTheme}>Switch theme</button>
    </div>
  );
};
