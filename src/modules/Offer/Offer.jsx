import React from "react";
import "./offer.scss";
import Card from "../../components/card/Card";
import { useTranslation } from "react-i18next";

const offer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
    <div className="offer">
      <span>YOUR SUCCES IS OUR SUCCESS</span>
      <div>
        <div className="cards-container">
          <Card title={t("card_title_one")} description={t("card_one")} />
          <Card title={t("card_title_two")} description={t("card_two")} />
          <Card title={t("card_title_three")} description={t("card_three")} />
          <Card title={t("card_title_four")} description={t("card_four")} />
        </div>
      </div>
    </div>
  );
};

export default offer;
