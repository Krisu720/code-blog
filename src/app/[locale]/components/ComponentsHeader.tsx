import { useTranslations } from "next-intl";
import { FC } from "react";

const ComponentsHeader = () => {
  const t = useTranslations("Components");

  return (
    <>
      <h1 className="text-6xl font-bold tracking-tighter">{t("title")}</h1>
      <h2 className="text-lg text-muted-foreground mt-2">{t("description")}</h2>
    </>
  );
};

export default ComponentsHeader;
