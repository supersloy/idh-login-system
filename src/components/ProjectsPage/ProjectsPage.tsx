import { useContext, useEffect, useState } from "react";
import { KeyCloakContext } from "../KeyCloakProvider/KeyCloakProvider";
import { Button, Flex, Typography } from "antd";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const { Text } = Typography;

import styles from "./ProjectsPage.module.css";
import { projects } from "./projects";
import { LanguageRadio } from "../LanguageRadio/LanguageRadion";
import { useTranslation } from "react-i18next";

type UserInfo = {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  email_verified: boolean;
  preferred_username: string;
  sub: string;
};

export function ProjectsPage() {
  const keycloak = useContext(KeyCloakContext);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(
    keycloak.userInfo as undefined
  );
  const { t } = useTranslation();

  useEffect(() => {
    keycloak
      .loadUserInfo()
      .then(() => setUserInfo(keycloak.userInfo as UserInfo));
  }, [keycloak]);

  return (
    <Flex vertical align="center" gap="small" style={{ minWidth: "437px" }}>
      <h1 className={styles.Title}>InnoDataHub</h1>
      <div style={{ width: "350px" }}>
        <LanguageRadio />
      </div>
      <Flex gap="middle" align="center">
        <Text strong>
          {t("signAs")}
          {userInfo?.email}
        </Text>
        <Button onClick={() => keycloak.logout()}>{t("logout")}</Button>
      </Flex>

      <Flex
        gap="middle"
        wrap
        align="start"
        justify="start"
        style={{ width: "95%" }}
      >
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Flex>
    </Flex>
  );
}
