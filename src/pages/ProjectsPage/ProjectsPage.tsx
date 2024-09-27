import { Button, Group, Paper, Space, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Trans, useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { scrollToTarget } from "@/utils/scrollToTarget";
import { ProjectCard } from "@components/ProjectCard/ProjectCard";
import { ProjectFullDescriptions } from "@components/ProjectFullDescription/ProjectsFullDescription";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Stack
        align="center"
        gap="32"
        style={{ minWidth: "500px" }}
        mih={"calc(100dvh - 64px"}
      >
        <Stack gap="5px" align="center">
          <div className={styles.Title + " " + styles.Text}>InnoDataHub</div>
          <div className={styles.SubTitle + " " + styles.Text}>
            {t("propoganda")}
          </div>
        </Stack>

        <Group px="56" align="stretch">
          <Paper withBorder className={styles.IDHDescription}>
            <Stack justify="space-between" h="100%">
              <Stack justify="center" h="100%">
                <Text fz="1.5rem" lh={1.5} span ff="IBM Plex Sans">
                  <Trans
                    t={t}
                    i18nKey="description"
                    components={{
                      nl: (
                        <>
                          <br />
                          <br />
                        </>
                      ),
                    }}
                  >
                    Добро пожаловать в лабораторию InnoDataHub. <br />
                    <br /> Здесь вы сможете погрузиться в искусственный
                    интеллект, получить доступ к необходимым ресурсам и
                    воплотить свои идеи в жизнь. <br />
                    <br />
                    Изучайте передовые технологии  и развивайте свои навыки с
                    лабораторией InnoDataHub.
                  </Trans>
                </Text>
              </Stack>
              <Button
                className={styles.StartButton}
                variant="default"
                radius="md"
                component="a"
                href={import.meta.env.VITE_PREVIEW_COURSE_LINK}
              >
                {t("goToPreviewCourse")}
              </Button>
            </Stack>
          </Paper>

          <div className={styles.ProjectsContainer}>
            {/* {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))} */}
            <Group gap="1rem" visibleFrom="sm" wrap="nowrap">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Group>
            <Group gap="1rem" visibleFrom="sm" wrap="nowrap">
              {projects.slice(2, 4).map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Group>
          </div>
        </Group>

        <Group
          wrap="nowrap"
          gap="0.25rem"
          onClick={() => scrollToTarget("datasets-description")}
          style={{ cursor: "pointer" }}
          py="2rem"
        >
          <Text size="25px" className={styles.Text} span>
            <Trans t={t} i18nKey="seeMore">
              Подробнее
            </Trans>
          </Text>
          <IconChevronDown />
        </Group>
      </Stack>

      <ProjectFullDescriptions />

      <Space h={40} />
      <span className={styles.Ellipse1}></span>
      <span className={styles.Ellipse2}></span>
    </>
  );
}
