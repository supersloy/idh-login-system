import { useContext, useState } from "react";
import DrawerOpenerIcon from "./DrawerOpener.svg";
import { Button, Flex, Space } from "antd";
import RightIcon from "./RightIcon.svg";
import { UserOutlined } from "@ant-design/icons";

import { Avatar } from "antd";

import classes from "./Drawer.module.css";
import Sider from "antd/es/layout/Sider";
import { KeyCloakContext } from "../KeyCloakProvider";
import { projects } from "../ProjectsPage/projects";
import { useTranslation } from "react-i18next";
import RequireAuthModal from "../RequireAuthModal/RequireAuthModal";

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
      <Space className={openerClassname} onClick={() => setActive(!active)}>
        <DrawerOpenerIcon />
      </Space>
      {active && (
        <Sider width="286px" className={classes.Drawer}>
          <Flex
            vertical
            justify="between"
            style={{ height: "100%", justifyContent: "space-between" }}
          >
            <Flex
              vertical
              align="center"
              style={{
                margin: "20px 28px",
              }}
              gap={"1rem"}
            >
              <div>
                <span className={classes.Title}>InnoDataHub</span>
              </div>

              <Flex vertical gap="0">
                {projects.map(({ name, link }) => (
                  <Button
                    id={name}
                    type="text"
                    className={classes.Button}
                    onClick={() => handleClick(link)}
                  >
                    <RightIcon />
                    <span className={classes.ButtonText}>
                      {t(`projects.${name}.title`)}
                    </span>
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Space className={classes.Account}>
              <Avatar
                style={{ backgroundColor: "#3B4168" }}
                icon={<UserOutlined />}
              />
              <span className={classes.AccountText}>Account</span>
            </Space>
          </Flex>
        </Sider>
      )}
      <RequireAuthModal open={authModalOpen} setOpen={setAuthModalOpen} />
    </>
  );
}
