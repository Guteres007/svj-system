import { create } from "zustand";
import { type User } from "@frontend/graphql";

export type UserStore = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  setUser: (newUser: User) => void;
  isAuthenticated: () => boolean;
  setAccessToken: (newAccessToken: string) => void;
  setRefreshToken: (newRefreshToken: string) => void;
  login: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
  init: () => void;
};

export const userStore = create<UserStore>((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  setUser: (newUser: User) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    set({ user: newUser });
  },
  setAccessToken: (newAccessToken: string) => {
    localStorage.setItem("accessToken", newAccessToken);
    set({ accessToken: newAccessToken });
  },
  setRefreshToken: (newRefreshToken: string) => {
    localStorage.setItem("refreshToken", newRefreshToken);
    set({ refreshToken: newRefreshToken });
  },
  login: (user: User, accessToken: string, refreshToken: string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    set({ accessToken });
    set({ refreshToken });
    set({ user });
  },
  logout: async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ user: null });
    set({ accessToken: null });
    set({ refreshToken: null });
  },
  isAuthenticated: () => {
    const state = get();
    return !!state.user && !!state.accessToken;
  },
  init: async () => {
    const user = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (user) {
      set({ user: JSON.parse(user) });
    }

    if (accessToken) {
      set({ accessToken });
    }

    if (refreshToken) {
      set({ refreshToken });
    }
  },
}));

const initUserStore = async () => {
  await userStore.getState().init();
};

initUserStore();
