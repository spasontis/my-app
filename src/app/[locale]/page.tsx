import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("translation");

  return <div>{t("pages.home.lable")}</div>;
}
