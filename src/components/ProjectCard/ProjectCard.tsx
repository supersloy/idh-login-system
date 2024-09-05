import { Button, Paper } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ProjectInfo } from "@/projects";
import { scrollToTarget } from "@/utils/scrollToTarget";

import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

import classes from "./ProjectCard.module.css";

type ProjectCardProps = ProjectInfo;
export function ProjectCard({ name }: ProjectCardProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  // const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();
  // const nav = useNavigate();

  const handleClick = () => {
    // if (keycloak.authenticated) nav(route);
    // else setAuthModalOpen(true);
    scrollToTarget(`${name}-description`);
  };

  return (
    <>
      <Paper withBorder className={classes.Card}>
        <div className={classes.Title}>{t(`projects.${name}.title`)}</div>
        <div className={classes.Description}>
          {t(`projects.${name}.description`)}
        </div>
        <Button className={classes.VisitButton} onClick={handleClick}>
          {t("goToProject")}
        </Button>
      </Paper>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
