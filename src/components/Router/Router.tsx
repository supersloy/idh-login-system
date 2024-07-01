import { useContext } from "react";
import { KeyCloakContext } from "../KeyCloakProvider/KeyCloakProvider";
import { AuthPage } from "../AuthPage/AuthPage";
import { ProjectsPage } from "../ProjectsPage/ProjectsPage";

export function Router() {
  const keycloak = useContext(KeyCloakContext);

  if (keycloak.authenticated) return <ProjectsPage />;
  return <AuthPage />;
}
