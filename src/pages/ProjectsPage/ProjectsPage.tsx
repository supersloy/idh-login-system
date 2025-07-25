import { Group, Paper, Space, Stack, Text } from "@mantine/core";
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
        justify="space-between"
      >
        <Stack gap="5px" align="center">
          <div className={styles.Title + " " + styles.Text}>InnoDataHub</div>
          <div className={styles.SubTitle + " " + styles.Text}>
            {t("propoganda")}
          </div>
        </Stack>

        <Group px="56" align="stretch" w="calc(100% - 128px)">
          <Paper
            className={styles.IDHDescription}
            withBorder
            shadow="sm"
            p="xl"
            radius="lg"
            flex={1}
          >
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
                <br /> Здесь вы сможете погрузиться в искусственный интеллект,
                получить доступ к необходимым ресурсам и воплотить свои идеи в
                жизнь. <br />
                <br />
                Изучайте передовые технологии  и развивайте свои навыки с
                лабораторией InnoDataHub.
              </Trans>
            </Text>
          </Paper>

          <ProjectCard {...projects[2]} />
        </Group>

        <Group
          wrap="nowrap"
          gap="0.25rem"
          onClick={() => scrollToTarget("booking-description")}
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
