import { Button, Card, Flex } from "antd";

import classes from "./ProjectCard.module.css";

type ProjectInfo = {
  name: string;
  description: string;
  link?: string;
};

export function ProjectCard(project: ProjectInfo) {
  return (
    <Card
      title={project.name}
      type="inner"
      className={classes.Card}
      actions={[
        <Button style={{ width: "90%" }} href={project.link}>
          Go to project
        </Button>,
      ]}
    >
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        {project.description}
      </Flex>
    </Card>
  );
}
