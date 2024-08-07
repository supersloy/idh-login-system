import { Flex } from "antd";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import styles from "./ProjectsPage.module.css";
import { projects } from "./projects";
import Header from "../Header/Header";
import Drawer from "../Drawer/Drawer";
import { useTranslation } from "react-i18next";

export function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Flex>
        <Drawer />
        <Flex vertical align="center" gap="small" style={{ minWidth: "437px" }}>
          <div className={styles.Title + " " + styles.Text}>InnoDataHub</div>
          <div className={styles.SubTitle + " " + styles.Text}>
            {t("propoganda")}
          </div>

          <div className={styles.ProjectsContainer}>
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </Flex>
      </Flex>
      <span color="#A020F080" className={styles.Ellipse1}></span>
      <span color="#A020F080" className={styles.Ellipse2}></span>
    </>
  );
}
