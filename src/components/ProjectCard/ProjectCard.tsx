import { Button, Paper } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ProjectInfo } from "@/projects";

import { KeyCloakContext } from "../KeyCloakProvider";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

import classes from "./ProjectCard.module.css";

function scrollToTargetAdjusted(id: string) {
  const element = document.getElementById(id)!;
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

type ProjectCardProps = ProjectInfo;
export function ProjectCard({ name, route }: ProjectCardProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();
  const nav = useNavigate();

  const handleClick = () => {
    // if (keycloak.authenticated) nav(route);
    // else setAuthModalOpen(true);
    scrollToTargetAdjusted(`${name}-description`);
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
