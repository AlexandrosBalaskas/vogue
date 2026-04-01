"use client";

import { useEffect, useState } from "react";

export function FakeVerification({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth <= 680; // threshold
      setIsMobile(mobile);

      if (mobile) {
        setTimeout(() => setVerified(true), 2500);
      }
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) {
    return <VerificationScreen />; // always stuck here on desktop
  }

  if (!verified) {
    return <VerificationScreen />;
  }

  return <>{children}</>;
}

function VerificationScreen() {
  return (
    <div className="verification-root">
      <div className="verification-box">
        <h1 className="verification-title">vogueadria.com</h1>

        <h2 className="verification-subtitle">
          Performing security verification
        </h2>

        <p className="verification-text">
          This website uses a security service to protect against malicious
          bots. This page is displayed while the website verifies you are not a
          bot.
        </p>

        <div className="verification-loader">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>

          <div className="cf">
            <strong>CLOUDFLARE</strong>
            <div className="cf-links">Privacy • Help</div>
          </div>
        </div>

        <div className="verification-footer">
          <div>Ray ID: 9e562c2fe83c1a5d</div>
          <div>
            Performance and Security by <span>Cloudflare</span>
          </div>
        </div>
      </div>
    </div>
  );
}
