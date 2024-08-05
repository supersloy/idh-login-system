import { Button, Card } from "antd";

import classes from "./ProjectCard.module.css";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { KeyCloakContext } from "../KeyCloakProvider";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

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
      <Card className={classes.Card}>
        <div className={classes.Title}>{t(`projects.${name}.title`)}</div>
        <div className={classes.Description}>
          {t(`projects.${name}.description`)}
        </div>
        <Button
          type="primary"
          ghost
          className={classes.VisitButton}
          onClick={handleClick}
        >
          {t("goToProject")}
        </Button>
      </Card>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
