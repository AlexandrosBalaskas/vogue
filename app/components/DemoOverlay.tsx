"use client";

type DemoOverlayProps = {
  open: boolean;
};

export function DemoOverlay({ open }: DemoOverlayProps) {
  if (!open) return null;

  return (
    <div className="demo-overlay" role="dialog" aria-modal="true">
      <div className="loading-bar-container">
        <div className="loading-bar" />
      </div>
    </div>
  );
}
