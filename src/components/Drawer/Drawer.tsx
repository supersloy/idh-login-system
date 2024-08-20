import { Avatar, Box, Button, Stack, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { projects } from "../../pages/ProjectsPage/projects";
import { KeyCloakContext } from "../KeyCloakProvider";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";
import RightIcon from "./RightIcon.svg";

import classes from "./Drawer.module.css";

export function Drawer() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();

  const handleClick = (href: string) => {
    if (keycloak.authenticated) window.location.href = href;
    else setAuthModalOpen(true);
  };

  return (
    <>
      <Box w="100%" className={classes.Drawer}>
        <Stack
          justify="between"
          style={{ height: "100%", justifyContent: "space-between" }}
        >
          <Stack align="center" gap={"1rem"}>
            <div>
              <span className={classes.Title}>InnoDataHub</span>
            </div>

            <Stack gap="0">
              {projects.map(({ name, link }) => (
                <Button
                  id={name}
                  className={classes.Button}
                  onClick={() => handleClick(link)}
                  key={name}
                  variant="subtle"
                  leftSection={<RightIcon />}
                >
                  <Text className={classes.ButtonText}>
                    {t(`projects.${name}.title`)}
                  </Text>
                </Button>
              ))}
            </Stack>
          </Stack>
          <Box className={classes.Account}>
            <Avatar style={{ backgroundColor: "#3B4168" }}></Avatar>
            <span className={classes.AccountText}>Account</span>
          </Box>
        </Stack>
      </Box>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
