import { useContext, useEffect, useState } from "react";
import { KeyCloakContext } from "../KeyCloakProvider/KeyCloakProvider";
import { Button, Flex, Typography } from "antd";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const { Text } = Typography;

import styles from "./ProjectsPage.module.css";

const projects = [
  {
    name: "Project 1",
    description:
      "Project 1 description \n Project 1 description \n Project 1 description",
  },
  { name: "Project 2", description: "Project 2 description" },
  { name: "Project 3", description: "Project 3 description" },
  { name: "Project 4", description: "Project 4 description" },
  { name: "Project 5", description: "Project 5 description" },
];

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

  useEffect(() => {
    keycloak
      .loadUserInfo()
      .then(() => setUserInfo(keycloak.userInfo as UserInfo));
  }, [keycloak]);

  console.log(userInfo);
  return (
    <Flex vertical align="center" gap="small" style={{ minWidth: "437px" }}>
      {/* <Card style={{ width: "50vw", marginTop: "20px" }}> */}
      <h1 className={styles.Title}>Inno Data Hub Projects</h1>
      <Flex gap="middle" align="center">
        <Text strong>Currently signed in as: {userInfo?.email}</Text>
        <Button onClick={() => keycloak.logout()}>Logout</Button>
      </Flex>
      <Flex
        gap="middle"
        wrap
        align="start"
        justify="start"
        style={{ width: "95%" }}
      >
        {projects.map((project) => (
          <ProjectCard name={project.name} description={project.description} />
        ))}
      </Flex>
    </Flex>
  );
}
