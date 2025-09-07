import { createContext, useEffect, useState, type ReactNode } from "react";

// type context
type UserContextType = {
  userLogin: string | null;
  setUserLogin: React.Dispatch<React.SetStateAction<string | null>>;
};

// context (initial value null)
export const UserContext = createContext<UserContextType | null>(null);

type UserContextProviderProps = {
  children: ReactNode;
};

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [userLogin, setUserLogin] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserLogin(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>{children}</UserContext.Provider>
  );
}
