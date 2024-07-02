import Keycloak from "keycloak-js";
import { createContext } from "react";

async function getKeyCloakContext() {
  const keycloak = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  });

  await keycloak.init({
    onLoad: "check-sso",
  });

  const KeyCloakContext = createContext(keycloak);

  return { KeyCloakContext, keycloak };
}

const { KeyCloakContext, keycloak } = await getKeyCloakContext();
const provider = KeyCloakContext.Provider;

export { KeyCloakContext, provider as KeyCloakProvider, keycloak };
