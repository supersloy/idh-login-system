import { Group, Space, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { ProjectCard } from "@components/ProjectCard/ProjectCard";
import { ProjectFullDescriptions } from "@components/ProjectFullDescription/ProjectsFullDescription";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        align="center"
        gap="sm"
        style={{ minWidth: "500px" }}
        mih={"calc(100dvh - 64px"}
      >
        <Stack gap="5px" align="center">
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
        <div style={{ marginTop: "140px" }}>
          <Group wrap="nowrap" gap="0.25rem">
            <Text size="25px" className={styles.Text} span>
              Подробнее
            </Text>
            <IconChevronDown />
          </Group>
        </div>
      </Stack>
      <ProjectFullDescriptions />
      <Space h={40} />
      <span color="#A020F080" className={styles.Ellipse1}></span>
      <span color="#A020F080" className={styles.Ellipse2}></span>
    </>
  );
}
