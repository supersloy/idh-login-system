import { Radio } from "antd";
import { useTranslation } from "react-i18next";

export function LanguageRadio({ size }: { size?: "large" | "small" }) {
  const { t, i18n } = useTranslation();

  return (
    <Radio.Group
      size={size}
      style={{ display: "flex", justifyContent: "center" }}
      defaultValue={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <Radio.Button value={"en"} style={{ width: "50%", textAlign: "center" }}>
        {t("english")}
      </Radio.Button>
      <Radio.Button
        value={"ru-RU"}
        style={{ width: "50%", textAlign: "center" }}
      >
        {t("russian")}
      </Radio.Button>
    </Radio.Group>
  );
}
