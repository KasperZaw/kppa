import React, { useEffect } from "react";
import "./toggle.scss";
import i18n from "../../i18n";

const Toggle = () => {
  const initialLanguage = localStorage.getItem("selectedLanguage") || "pl";

  useEffect(() => {
    i18n.changeLanguage(initialLanguage);
  }, [initialLanguage]);

  const handleToggleChange = () => {
    const newLanguage = i18n.language === "pl" ? "en" : "pl";
    localStorage.setItem("selectedLanguage", newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onChange={handleToggleChange}
        checked={i18n.language === "en"}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">PL</span>
      <span className="off">EN</span>
    </div>
  );
};

export default Toggle;
