import React from "react";

export default function modal({ open, children }) {
  if (!open) return null;
  return <div>{children}</div>;
}
