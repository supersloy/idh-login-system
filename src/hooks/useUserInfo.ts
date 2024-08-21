import { useContext, useEffect, useState } from "react";

import { KeyCloakContext } from "@components/KeyCloakProvider";

type UserInfo = {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  email_verified: boolean;
  preferred_username: string;
  sub: string;
};

export function useUserInfo() {
  const keycloak = useContext(KeyCloakContext);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(
    keycloak.userInfo as undefined
  );

  useEffect(() => {
    keycloak
      .loadUserInfo()
      .then(() => setUserInfo(keycloak.userInfo as UserInfo));
  }, [keycloak]);

  const authenticated = keycloak.authenticated || false;

  return { userInfo, authenticated };
}
