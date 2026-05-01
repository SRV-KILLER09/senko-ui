"use client";

import React from "react";
import PillNavbar from "@/registry/pill-navbar";
import { BeveledBorderButton } from "@/registry/beveled-border-button";

export function NavbarPreview() {
  return (
    <div className="w-full relative flex items-center justify-center px-4 [&_a]:no-underline [&_a]:text-inherit [&_*]:!fixed:relative">
      <PillNavbar
              logo={
                <div className="font-bold text-lg tracking-tight flex items-center gap-1">
                  <div className="size-4 bg-blue-600 rounded-sm" />
                  <span>TS<span className="text-blue-600">.</span>UI</span>
                </div>
              }
              items={[
                { label: "Registry", href: "#registry" },
                { label: "Documentation", href: "#docs" },
                { label: "Showcase", href: "#showcase" },
              ]}
              actions={[<BeveledBorderButton key="cta" title="Copy Registry" />]}
              className="relative -mt-18"
            />
    </div>
  );
}