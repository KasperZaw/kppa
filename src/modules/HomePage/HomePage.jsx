import React, { useEffect, useState } from "react";
import "./home-page.scss";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Nav";
import CircleContainer from "../../components/slider/Slider";
import accounting from "../../assets/images/pillars/accounting.png";
import law from "../../assets/images/pillars/law.png";
import taxes from "../../assets/images/pillars/taxes.png";
import administration from "../../assets/images/pillars/administration.png";

const HomePage = () => {
  const imageUrls = [accounting, law, taxes, administration];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonText, setButtonText] = useState("contact");

  const showMail = () => {
    setButtonText(buttonText === "contact" ? "email" : "contact");
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 4000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleColumnClick = (index) => {
    setCurrentImageIndex(index);
  };
  const { t } = useTranslation();

  return (
    <main>
      <Navbar />
      <div className="main-container">
        <header>
          <div className="main-text">
            <h1>
              {t("title_one")} <br /> {t("title_two")}
            </h1>
          </div>
          <div className="sub-text-container">
            <span className="sub-title">{t("sub_title")}</span>
            <div className="sub-text">
              <span
                className={currentImageIndex === 0 ? "highlighted-text" : ""}
              >
                {t("pillar_one")}
              </span>
              <div></div>
              <span
                className={currentImageIndex === 1 ? "highlighted-text" : ""}
              >
                {t("pillar_two")}
              </span>
              <div></div>
              <span
                className={currentImageIndex === 2 ? "highlighted-text" : ""}
              >
                {t("pillar_three")}
              </span>
              <div></div>
              <span
                className={currentImageIndex === 3 ? "highlighted-text" : ""}
              >
                {t("pillar_four")}
              </span>
            </div>
          </div>
          <div className="contact-btn">
            <button onClick={showMail}>{t(buttonText)}</button>
          </div>
        </header>
        <CircleContainer
          imageUrls={imageUrls}
          currentImageIndex={currentImageIndex}
          handleColumnClick={handleColumnClick}
        />
      </div>
    </main>
  );
};

export default HomePage;
