import { createTheme, Loader, MantineProvider } from "@mantine/core";
import { Suspense } from "react";

import {
  keycloak,
  KeyCloakProvider,
} from "./components/KeyCloakProvider/KeyCloakProvider";
import { Router } from "./components/Router/Router";

import "@mantine/core/styles.css";

function App() {
  const theme = createTheme({
    // components: {
    //   Button: Button.extend({
    //     defaultProps: {
    //       color: "gray",
    //       variant: "outline",
    //     },
    //   }),
    // },
  });

  return (
    <Suspense fallback={<Loader color="blue" />}>
      <MantineProvider theme={theme}>
        <KeyCloakProvider value={keycloak}>
          <Router />
        </KeyCloakProvider>
      </MantineProvider>
    </Suspense>
  );
}

export default App;
