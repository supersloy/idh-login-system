import { Box, Button, Center, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { KeyCloakContext } from "../KeyCloakProvider";

import classes from "./Header.module.css";

type UserInfo = {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  email_verified: boolean;
  preferred_username: string;
  sub: string;
};

export default function HeaderUser() {
  const { t } = useTranslation();
  const keycloak = useContext(KeyCloakContext);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(
    keycloak.userInfo as undefined
  );
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    keycloak
      .loadUserInfo()
      .then(() => setUserInfo(keycloak.userInfo as UserInfo));
  }, [keycloak]);

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
        <div className={classes.UserDropdown}>
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
