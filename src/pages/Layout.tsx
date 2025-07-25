import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

import { Header } from "@components/Header";

function Layout() {
  const [opened] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      footer={{ height: 0 }}
      w="100%"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">
        <Drawer />
      </AppShell.Navbar> */}
      <AppShell.Main w={"100%"}>
        <Outlet />
      </AppShell.Main>
      {/* <DrawerOpener opened={opened} toggleOpened={toggle} /> */}
    </AppShell>
  );
}

export { Layout };
