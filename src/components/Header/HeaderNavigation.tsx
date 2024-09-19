import { NavLink } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { scrollToTarget } from "@utils/scrollToTarget";

import classes from "./Header.module.css";

export function HeaderNavigation() {
  const { t } = useTranslation();

  const handleClick = (name: string) => {
    scrollToTarget(`${name}-description`);
  };

  return (
    <>
      {projects.map((project) => (
        <NavLink
          leftSection={project.icon}
          key={project.name}
          label={t(`projects.${project.name}.title`)}
          h="100%"
          w="auto"
          color="blue"
          className={classes.NavLink}
          onClick={() => handleClick(project.name)}
          // active={path.includes(project.route)}
        ></NavLink>
      ))}
    </>
  );
}
