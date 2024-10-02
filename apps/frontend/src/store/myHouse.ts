import { create } from "zustand";

export type MyHousesStore = {
  selectedHouse: string | null;
  setHouse: (newHouse: string) => void;
  getHouse: () => string | null;
};

export const myHouseStore = create<MyHousesStore>((set, get) => ({
  selectedHouse: null,
  setHouse: (newHouse: string) => {
    localStorage.setItem("selectedHouse", newHouse);
    set({ selectedHouse: newHouse });
  },
  getHouse: () => {
    if (localStorage.getItem("selectedHouse")) {
      set({ selectedHouse: localStorage.getItem("selectedHouse") });
      return get().selectedHouse;
    }
    return null;
  },
}));
