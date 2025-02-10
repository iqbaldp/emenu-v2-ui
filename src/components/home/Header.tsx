"use client";

import { merchantConfig } from "@/config/merchant";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-title-container">
        <div className="logo">{merchantConfig.logo}</div>
        <h1 className="title">{merchantConfig.name}</h1>
        <div className="table-indicator">Meja #1</div>
      </div>
    </div>
  );
}
