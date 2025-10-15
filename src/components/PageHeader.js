import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center my-5">
      <h2>{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
      <hr className="page-separator" />
    </div>
  );
}
