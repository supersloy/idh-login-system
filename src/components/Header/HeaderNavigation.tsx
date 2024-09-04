import { NavLink } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { projects } from "@/projects";

import classes from "./Header.module.css";

export function HeaderNavigation() {
  const { t } = useTranslation();
  const path = window.location.href;

  return (
    <>
      {projects.map((project) => (
        <NavLink
          href={project.route}
          leftSection={project.icon}
          key={project.name}
          label={t(`projects.${project.name}.title`)}
          h="100%"
          w="auto"
          color="blue"
          className={classes.NavLink}
          active={path.includes(project.route)}
        ></NavLink>
      ))}
    </>
  );
}
