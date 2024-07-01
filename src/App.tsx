import { Suspense } from "react";
import {
  KeyCloakProvider,
  keycloak,
} from "./components/KeyCloakProvider/KeyCloakProvider";
import { Router } from "./components/Router/Router";
import { Skeleton } from "antd";

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <KeyCloakProvider value={keycloak}>
        <Router />
      </KeyCloakProvider>
    </Suspense>
  );
}

export default App;
