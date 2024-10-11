import { User } from "features/user";
import { useCallback } from "react";

type PersistUser = {
  user: User;
};

export const usePersistUser = () => {
  const persistUser = useCallback(({ user }: PersistUser) => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  const getUser = useCallback(() => {
    const user = localStorage.getItem("user");

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }, []);

  const clearUser = useCallback(() => {
    localStorage.removeItem("user");
  }, []);

  return { persistUser, getUser, clearUser };
};
