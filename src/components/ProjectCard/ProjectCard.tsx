import { Button, Card, Paper, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { KeyCloakContext } from "../KeyCloakProvider";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

import classes from "./ProjectCard.module.css";

type ProjectInfo = {
  name: string;
  link: string;
};

export function ProjectCard({ name, link }: ProjectInfo) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();

  const handleClick = () => {
    if (keycloak.authenticated) window.location.href = link;
    else setAuthModalOpen(true);
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
