import type { CSSProperties } from "react";

// Decalage d'une animation d'entree (variable CSS --d lue par .rise et
// [data-reveal]), pour faire arriver les elements les uns apres les autres.
export const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });