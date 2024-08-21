import { Box } from "@mantine/core";

import DrawerOpenerIcon from "./svgs/DrawerOpener.svg";

import classes from "./Drawer.module.css";

type DrawerOpenerProps = {
  opened: boolean;
  toggleOpened: () => void;
};

export function DrawerOpener({ opened, toggleOpened }: DrawerOpenerProps) {
  let openerClassname = classes.Opener;
  if (opened) openerClassname = `${openerClassname} ${classes.OpenerReversed}`;

  return (
    <Box className={openerClassname} onClick={toggleOpened}>
      <DrawerOpenerIcon />
    </Box>
  );
}
