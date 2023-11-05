import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      id: 12233243,
      title: "Test Zustand",
      status: "done",
    },
  ],
  addTask: (id, title, status) =>
    set((state) => ({ tasks: [...state.tasks, { id, title, status }] })),
  isModalOpen: false,
  setIsModalOpen: (bool) =>
    set((state) => ({
      isModalOpen: bool ? bool : !state.isModalOpen,
    })),
});

export const useStore = create(store);
