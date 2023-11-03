import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      title: "Test Zustand",
      status: "done",
    },
  ],
  addTask: (title, status) =>
    set((store) => ({ tasks: [...store.tasks, { title, status }] })),
});

export const useStore = create(store);
