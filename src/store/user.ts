import { create } from "zustand";
import { devtools } from "zustand/middleware";

type User = {
  name: string;
  role: string;
};

interface Store {
  user: User;
  setUser: (user: User) => void;
}

export const useAuthStore = create<Store>()(
  devtools((set) => ({
    user: {
      name: "Vicente Rivera",
      role: "Developer",
    },
    setUser: (user: User) => set({ user }, false, "setUser"),
  }))
);
