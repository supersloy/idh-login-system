import { Flex, Card, Button } from "antd";
import { useContext } from "react";
import { KeyCloakContext } from "../KeyCloakProvider/KeyCloakProvider";
import styles from "./AuthPage.module.css";

export function AuthPage() {
  const keycloak = useContext(KeyCloakContext);

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
              Login
            </Button>
            <Button
              onClick={() => keycloak.register()}
              className={styles.LoginButton}
            >
              Register
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
