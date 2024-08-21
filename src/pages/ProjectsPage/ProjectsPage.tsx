import { Group, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { ProjectCard } from "@components/ProjectCard/ProjectCard";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Group>
        <Stack align="center" gap="sm" style={{ minWidth: "437px" }}>
          <div className={styles.Title + " " + styles.Text}>InnoDataHub</div>
          <div className={styles.SubTitle + " " + styles.Text}>
            {t("propoganda")}
          </div>
          <div className={styles.ProjectsContainer}>
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </Stack>
      </Group>
      <span color="#A020F080" className={styles.Ellipse1}></span>
      <span color="#A020F080" className={styles.Ellipse2}></span>
    </>
  );
}
