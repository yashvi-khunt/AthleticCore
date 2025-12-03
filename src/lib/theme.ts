import type { CSSProperties } from "react";
import theme from "@/data/theme.json";

export const themeVars: CSSProperties = {
  ["--color-primary" as string]: theme.primary,
  ["--color-secondary" as string]: theme.secondary,
  ["--color-background" as string]: theme.background,
  ["--color-text-primary" as string]: theme.textPrimary,
  ["--color-text-secondary" as string]: theme.textSecondary,
  ["--site-max-width" as string]: theme.siteMaxWidth,
};

export type Theme = typeof theme;
export default theme;
