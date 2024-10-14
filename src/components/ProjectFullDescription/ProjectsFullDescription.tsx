import { Button, Flex, Group, Image, Stack, Text } from "@mantine/core";
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
      {/* <Group w="100%" justify={rtl ? "flex-start" : "flex-end"}> */}
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
      {/* </Group> */}
    </Stack>
  );

  const imageComponent = (
    <Image
      radius="30px"
      flex={1}
      w="40%"
      src={image}
      style={{
        // border: "1px solid #B2C8FF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    />
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
        {imageComponent}
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

  return (
    <Stack gap={50}>
      {projects.map((project, index) => (
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
              p: <Text size="22px" lh={1.5} fw={400} />,
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
