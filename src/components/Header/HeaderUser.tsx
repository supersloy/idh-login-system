import { Button, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { useUserInfo } from "@hooks/useUserInfo";

import { KeyCloakContext } from "../KeyCloakProvider";

import classes from "./Header.module.css";

export default function HeaderUser() {
  const { t } = useTranslation();
  const keycloak = useContext(KeyCloakContext);
  const [opened, setOpened] = useState(false);
  const { userInfo } = useUserInfo();

  if (!keycloak.authenticated) {
    return (
      <Button
        variant="outline"
        className={classes.LoginButton}
        w={136}
        h={44}
        onClick={() => keycloak.login()}
      >
        {t("login")}
      </Button>
    );
  }

  return (
    <Menu width="target" trigger="hover" opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className={classes.Dropdown}>
          {userInfo?.email}
          <IconChevronDown />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => keycloak.logout()}>{t("logout")}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
