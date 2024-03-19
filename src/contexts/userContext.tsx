import { ReactNode, createContext, useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  profilePic: string;
};

interface UserProviderProps {
  children: ReactNode;
}

type UserContextData = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
