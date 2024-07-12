import { Flex, Card, Button } from "antd";
import { useContext } from "react";
import { KeyCloakContext } from "../KeyCloakProvider/KeyCloakProvider";
import styles from "./AuthPage.module.css";
import { useTranslation } from "react-i18next";
import { LanguageRadio } from "../LanguageRadio/LanguageRadion";

export function AuthPage() {
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();

  return (
    <Flex justify="center" className={styles.PageContainer}>
      <Flex vertical justify="center">
        <Card className={styles.Card}>
          <Flex vertical gap="small">
            <h1 className={styles.Title}>InnoDataHub</h1>
            <Button
              onClick={() => keycloak.login()}
              className={styles.LoginButton}
            >
              {t("login")}
            </Button>
            <Button
              onClick={() => keycloak.register()}
              className={styles.LoginButton}
            >
              {t("register")}
            </Button>
            <LanguageRadio size="large" />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
