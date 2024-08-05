import { Layout, Flex, Dropdown, MenuProps, Button } from "antd";

import classes from "./Header.module.css";
import UIsvg from "./svgs/UI.svg";
import AESsvg from "./svgs/AES.svg";
import UK from "./svgs/UK.svg";
import Russia from "./svgs/Russia.svg";
import { useTranslation } from "react-i18next";
import HeaderUser from "./HeaderUser";
import HeaderNavigation from "./HeaderNavigation";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

const languageDict = {
  "ru-RU": <Russia />,
  en: <UK />,
};

const AppHeader = () => {
  const { i18n } = useTranslation();

  const items: MenuProps["items"] = [
    {
      key: "ru-RU",
      label: (
        <Flex justify="center" onClick={() => i18n.changeLanguage("ru-RU")}>
          {languageDict["ru-RU"]}
        </Flex>
      ),
    },
    {
      key: "en",
      label: (
        <Flex justify="center" onClick={() => i18n.changeLanguage("en")}>
          {languageDict["en"]}
        </Flex>
      ),
    },
  ];

  return (
    <Header className={classes.Header}>
      <div className={classes.Logos}>
        <a style={{ display: "flex" }} href="https://unionepro.ru/">
          <UIsvg />
        </a>
        <a
          style={{ display: "flex" }}
          href="https://engineerschool.innopolis.university/"
        >
          <AESsvg />
        </a>
      </div>
      <HeaderNavigation />
      <Flex gap="1rem">
        <Dropdown menu={{ items }} className={classes.LanguageDropdown}>
          <Button className={classes.LanguageButton}>
            {languageDict[i18n.language as keyof typeof languageDict]}
            <DownOutlined />
          </Button>
        </Dropdown>
        <HeaderUser />
      </Flex>
    </Header>
  );
};

export default AppHeader;
