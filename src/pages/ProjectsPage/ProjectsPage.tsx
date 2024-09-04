import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { ProjectCard } from "@components/ProjectCard/ProjectCard";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Stack align="center" gap="sm" style={{ minWidth: "500px" }}>
        <Stack gap={0} align="center">
          <div className={styles.Title + " " + styles.Text}>InnoDataHub</div>
          <div className={styles.SubTitle + " " + styles.Text}>
            {t("propoganda")}
          </div>
        </Stack>
        <div className={styles.ProjectsContainer}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </Stack>
      <span color="#A020F080" className={styles.Ellipse1}></span>
      <span color="#A020F080" className={styles.Ellipse2}></span>
    </>
  );
}
