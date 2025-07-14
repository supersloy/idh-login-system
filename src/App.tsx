import { createTheme, Loader, MantineProvider } from "@mantine/core";
import { Suspense } from "react";

import { Router } from "./pages/Router";

import "@mantine/core/styles.layer.css";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Suspense fallback={<Loader color="blue" />}>
        {/* <KeyCloakProvider value={keycloak}> */}
        <Router />
        {/* </KeyCloakProvider> */}
      </Suspense>
    </MantineProvider>
  );
}

export default App;
