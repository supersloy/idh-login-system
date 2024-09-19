import { Button, Paper, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { ProjectInfo, projects } from "@/projects";
import { scrollToTarget } from "@/utils/scrollToTarget";
import { KeyCloakContext } from "@components/KeyCloakProvider";

import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

import classes from "./ProjectCard.module.css";

type ProjectCardProps = ProjectInfo;
export function ProjectCard({ name }: ProjectCardProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();
  // const nav = useNavigate();

  const goToDescription = () => {
    scrollToTarget(`${name}-description`);
  };

  const goToProject = () => {
    if (!keycloak.authenticated) {
      setAuthModalOpen(true);
      return;
    }
    const project = projects.find((project) => project.name === name);
    window.open(project?.link, "_self");
  };

  return (
    <>
      <Paper withBorder className={classes.Card}>
        <div className={classes.Title}>{t(`projects.${name}.title`)}</div>
        <div className={classes.Description}>
          {t(`projects.${name}.description`)}
        </div>
        <Stack gap={10} mb={20}>
          <Button className={classes.VisitButton} onClick={goToDescription}>
            {t("goToDescription")}
          </Button>
          <Button className={classes.VisitButton} onClick={goToProject}>
            {t("goToProject")}
          </Button>
        </Stack>
      </Paper>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
