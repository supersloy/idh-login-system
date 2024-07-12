import { Button, Card, Flex } from "antd";

import classes from "./ProjectCard.module.css";
import { useTranslation } from "react-i18next";

type ProjectInfo = {
  name: string;
  link: string;
};

export function ProjectCard({ name, link }: ProjectInfo) {
  const { t } = useTranslation();
  return (
    <Card
      title={t(`projects.${name}.title`)}
      type="inner"
      className={classes.Card}
      actions={[
        <Button style={{ width: "90%" }} href={link}>
          {t("goToProject")}
        </Button>,
      ]}
    >
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        {t(`projects.${name}.description`)}
      </Flex>
    </Card>
  );
}
