import { Button, Group, Paper, Space, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

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
        <Group wrap="nowrap" px="56" align="stretch">
          <Stack w="50%" justify="space-between" gap="lg">
            <Paper
              withBorder
              p="lg"
              px="xl"
              flex={1}
              className={styles.IDHDescription}
            >
              <Text lh={1.5} span>
                What is Lorem Ipsum? <br />
                <br /> Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </Text>
            </Paper>
            <Button
              className={styles.StartButton}
              variant="default"
              radius="md"
            >
              Пройти стартовый курс
            </Button>
          </Stack>

          <div className={styles.ProjectsContainer}>
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
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
            Подробнее
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
