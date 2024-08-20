import { Avatar, Box, Button, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { KeyCloakContext } from "../KeyCloakProvider";
import { projects } from "../ProjectsPage/projects";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";
import DrawerOpenerIcon from "./DrawerOpener.svg";
import RightIcon from "./RightIcon.svg";

import classes from "./Drawer.module.css";

export default function Drawer() {
  const [active, setActive] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const keycloak = useContext(KeyCloakContext);
  const { t } = useTranslation();

  let openerClassname = classes.Opener;
  if (active) openerClassname = classes.OpenerReversed;

  const handleClick = (href: string) => {
    if (keycloak.authenticated) window.location.href = href;
    else setAuthModalOpen(true);
  };

  return (
    <>
      <Box className={openerClassname} onClick={() => setActive(!active)}>
        <DrawerOpenerIcon />
      </Box>
      {active && (
        <Box w="286px" className={classes.Drawer}>
          <Stack
            justify="between"
            style={{ height: "100%", justifyContent: "space-between" }}
          >
            <Stack
              align="center"
              style={{
                margin: "20px 28px",
              }}
              gap={"1rem"}
            >
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
                  >
                    <RightIcon />
                    <span className={classes.ButtonText}>
                      {t(`projects.${name}.title`)}
                    </span>
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
      )}
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
