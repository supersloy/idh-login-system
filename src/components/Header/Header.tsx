import { Box, Button, Center, Group, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
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

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <Group h="100%" w="100%" p="0" justify="space-between" align="center">
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
        <Menu width="target" trigger="hover">
          <Menu.Target>
            <Group className={classes.UserDropdown} mr="0" miw="auto" gap="sm">
              {languageDict[i18n.language as keyof typeof languageDict]}
              <IconChevronDown />
            </Group>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => i18n.changeLanguage("en")}>
              <Center>{languageDict["en"]}</Center>
            </Menu.Item>
            <Menu.Item onClick={() => i18n.changeLanguage("ru-RU")}>
              <Center>{languageDict["ru-RU"]}</Center>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <HeaderUser />
      </Group>
    </Group>
  );
};

export { Header };
