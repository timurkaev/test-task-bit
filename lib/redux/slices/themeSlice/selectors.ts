import type { ReduxState } from "@/lib/redux";

export const selectTheme = (state: ReduxState) => state.theme.mode;
