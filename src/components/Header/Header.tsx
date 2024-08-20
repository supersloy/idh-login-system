import { Button, Group, Menu } from "@mantine/core";
import { useTranslation } from "react-i18next";

import AESsvg from "./svgs/AES.svg";
import Russia from "./svgs/Russia.svg";
import UIsvg from "./svgs/UI.svg";
import UK from "./svgs/UK.svg";
import HeaderUser from "./HeaderUser";

import classes from "./Header.module.css";

const languageDict = {
  "ru-RU": <Russia />,
  en: <UK />,
};

const AppHeader = () => {
  const { i18n } = useTranslation();

  return (
    <div className={classes.Header}>
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
      <Group gap="1rem">
        <Menu>
          <Menu.Target>
            <Button className={classes.LanguageButton}>
              {languageDict[i18n.language as keyof typeof languageDict]}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => i18n.changeLanguage("en")}>
              {languageDict["en"]}
            </Menu.Item>
          </Menu.Dropdown>
          <Menu.Dropdown>
            <Menu.Item onClick={() => i18n.changeLanguage("ru-RU")}>
              {languageDict["ru-RU"]}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <HeaderUser />
      </Group>
    </div>
  );
};

export default AppHeader;
