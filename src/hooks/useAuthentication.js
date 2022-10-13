import { userState, useEffect } from "react";
import { getAuth, onAuthStateChange } from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = userState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (user) => {
      user ? setUser(user) : setUser(undefined);
      return unsubscribe;
    });
  }, []);
  return { user };
}
