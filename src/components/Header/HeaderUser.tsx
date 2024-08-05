import { Button, Dropdown, Space } from "antd";
import classes from "./Header.module.css";
import { useContext, useEffect, useState } from "react";
import { KeyCloakContext } from "../KeyCloakProvider";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";

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
      <Button
        type="primary"
        ghost
        className={classes.LoginButton}
        onClick={() => keycloak.login()}
      >
        {t("login")}
      </Button>
    );
  } else {
    return (
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              label: <div onClick={() => keycloak.logout()}>{t("logout")}</div>,
            },
          ],
        }}
      >
        <Space className={classes.UserDropdown}>
          {userInfo?.email}
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  }
}
