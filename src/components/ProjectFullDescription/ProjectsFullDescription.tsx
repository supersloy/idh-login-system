import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useContext, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { projects } from "@/projects";
import { KeyCloakContext } from "@components/KeyCloakProvider";
import RequireAuthModal from "@components/RequireAuthModal/RequireAuthModal";

import styles from "./ProjectsFullDescription.module.css";

type ProjectLineProps = {
  children: React.ReactNode;

  name: string;
  icon: JSX.Element;
  image: string;
  rtl?: boolean;

  disabledReason?: string;

  onGoToProject: () => void;
};

function ProjectLine({
  children,
  name,
  icon,
  image,
  rtl,
  disabledReason,
  onGoToProject,
}: ProjectLineProps) {
  const { t } = useTranslation();
  const onClick = onGoToProject;

  const productDescription = (
    <Stack flex={1} align="flex-start">
      {children}
      <Button
        component="a"
        w={300}
        h={35}
        onClick={disabledReason ? () => {} : onClick}
        radius={10}
        fz={16}
        disabled={!!disabledReason}
      >
        {t("goToProject")}
      </Button>
      {disabledReason && (
        <Text c="dimmed" fz={20}>
          {/* {t(disabledReason)} */}
        </Text>
      )}
    </Stack>
  );

  return (
    <Stack gap="sm" px={100} id={`${name}-description`}>
      <Group gap="xs">
        <div className={styles.IconContainer}>{icon}</div>
        <Text className={styles.Title}>{t(`projects.${name}.title`)}</Text>
      </Group>
      <Flex
        wrap="nowrap"
        align="flex-start"
        gap={50}
        direction={rtl ? "row-reverse" : "row"}
      >
        {productDescription}
        <Paper radius="lg" flex={1} w="40%" shadow="sm" withBorder>
          <Image src={image} radius="lg" />
        </Paper>
      </Flex>
    </Stack>
  );
}

export function ProjectFullDescriptions() {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const goToProject = (link: string) => {
    if (!keycloak.authenticated) {
      setAuthModalOpen(true);
      return;
    }
    window.open(link, "_self");
  };
  const currentProjects = projects.slice(2, 3);

  return (
    <Stack gap={64}>
      {currentProjects.map((project, index) => (
        <ProjectLine
          key={project.name}
          {...project}
          rtl={index % 2 === 1}
          onGoToProject={() => goToProject(project.link)}
          disabledReason={project.name !== "booking" ? "coming" : undefined}
        >
          <Trans
            t={t}
            i18nKey={`projects.${project.name}.longDescription`}
            components={{
              p: <Text size="20px" lh={1.5} fw={400} />,
              ul: <ul />,
              li: <li />,
              s: <strong />,
            }}
          ></Trans>
        </ProjectLine>
      ))}
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </Stack>
  );
}
