import { Box, Button, Paper, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { ProjectInfo, projects } from "@/projects";
import { scrollToTarget } from "@/utils/scrollToTarget";
import { KeyCloakContext } from "@components/KeyCloakProvider";

import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

import classes from "./ProjectCard.module.css";

type ProjectCardProps = ProjectInfo;
const IGNORE_KEYCLOAK = true;

export function ProjectCard({ name }: ProjectCardProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();
  // const nav = useNavigate();

  const goToDescription = () => {
    scrollToTarget(`${name}-description`);
  };

  const goToProject = () => {
    if (!keycloak.authenticated && !IGNORE_KEYCLOAK) {
      setAuthModalOpen(true);
      return;
    }
    const project = projects.find((project) => project.name === name);
    window.open(project?.link, "_self");
  };

  return (
    <>
      <Paper withBorder p="xl" radius="lg" shadow="sm">
        <Stack align="center" justify="space-between" h="100%">
          <div className={classes.Title}>{t(`projects.${name}.title`)}</div>
          <Box className={classes.Description}>
            {t(`projects.${name}.description`)}
          </Box>
          <Stack>
            <Button className={classes.VisitButton} onClick={goToDescription}>
              {t("goToDescription")}
            </Button>
            <Button
              className={classes.VisitButton}
              onClick={goToProject}
              disabled={name !== "booking"}
            >
              {t("goToProject")}
            </Button>
          </Stack>
        </Stack>
      </Paper>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
