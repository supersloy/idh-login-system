import { Avatar, Box, Button, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { projects } from "@/projects";
import { useUserInfo } from "@/utils/useUserInfo";

import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";
import RightIcon from "./svgs/RightIcon.svg";

import classes from "./Drawer.module.css";

export function Drawer() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { t } = useTranslation();
  const { userInfo, authenticated } = useUserInfo();
  const nav = useNavigate();

  const handleClick = (route: string) => {
    if (authenticated) nav(route);
    else setAuthModalOpen(true);
  };

  return (
    <>
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />

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
              {projects.map(({ name, route }) => (
                <Button
                  id={name}
                  className={classes.Button}
                  onClick={() => handleClick(route)}
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

          {authenticated && (
            <Box className={classes.Account}>
              <Avatar c="blue" />
              <span className={classes.AccountText}>
                {userInfo?.preferred_username}
              </span>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
}
