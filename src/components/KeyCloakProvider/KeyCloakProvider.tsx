import Keycloak from "keycloak-js";
import { createContext } from "react";

async function getKeyCloakContext() {
  const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "myrealm",
    clientId: "myclient",
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
