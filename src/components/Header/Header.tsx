import { Center, Group, Menu, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Russia from "./svgs/Russia.svg";
import UK from "./svgs/UK.svg";
import { HeaderNavigation } from "./HeaderNavigation";
import HeaderUser from "./HeaderUser";

import classes from "./Header.module.css";

const languageDict = {
  "ru-RU": <Russia />,
  en: <UK />,
};

const Header = () => {
  const { i18n } = useTranslation();
  const nav = useNavigate();

  return (
    <Group h="100%" w="100%" p="0" justify="space-between" align="center">
      {/* <Group ml="28px" gap="1rem">
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
      </Group> */}
      <Title
        ml={56}
        onClick={() => {
          nav("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{ cursor: "pointer" }}
      >
        InnoDataHub
      </Title>

      <Group h={"100%"} visibleFrom="md" gap="xs">
        <HeaderNavigation />
      </Group>

      <Group gap="1rem" visibleFrom="xl">
        <Menu width="target" trigger="hover">
          <Menu.Target>
            <Group className={classes.Dropdown} mr="0" miw="auto" gap="sm">
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
