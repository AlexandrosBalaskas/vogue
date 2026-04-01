"use client";

import { useState } from "react";

export function CookieModal() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem("cookie-consent-choice");
  });

  const closeWithChoice = (choice: "allow" | "customize") => {
    window.localStorage.setItem("cookie-consent-choice", choice);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie-overlay">
      <div
        className="cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        <div className="cookie-top">
          <div className="cookie-brand">VOGUE</div>
          <div className="cookie-provider">
            <div className="cookie-provider-title">Cookiebot</div>
            <div className="cookie-provider-sub">by Usercentrics</div>
          </div>
        </div>

        <div className="cookie-tabs">
          <button type="button" className="cookie-tab cookie-tab-active">
            Consent
          </button>
        </div>

        <div className="cookie-content">
          <h2 id="cookie-title" className="cookie-title">
            This website uses cookies
          </h2>
          <p className="cookie-text">
            We use cookies to personalise content and ads, to provide social
            media features and to analyse our traffic. We also share information
            about your use of our site with our social media, advertising and
            analytics partners who may combine it with other information that
            you’ve provided to them or that they’ve collected from your use of
            their services.
          </p>
        </div>

        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-allow"
            onClick={() => closeWithChoice("allow")}
          >
            Allow all
          </button>
          <button
            type="button"
            className="cookie-customize"
            onClick={() => closeWithChoice("customize")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
