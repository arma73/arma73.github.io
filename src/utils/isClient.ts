export const isClient = window !== undefined && window.document !== undefined;

export const canUseDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);
