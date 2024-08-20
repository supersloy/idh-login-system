import { Box, Button, Menu } from "@mantine/core";
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

  useEffect(() => {
    keycloak
      .loadUserInfo()
      .then(() => setUserInfo(keycloak.userInfo as UserInfo));
  }, [keycloak]);

  if (!keycloak.authenticated) {
    return (
      <Button className={classes.LoginButton} onClick={() => keycloak.login()}>
        {t("login")}
      </Button>
    );
  } else {
    return (
      <Menu>
        <Menu.Target>
          <Box className={classes.UserDropdown}>{userInfo?.email}</Box>
        </Menu.Target>
      </Menu>
    );
  }
}
