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
    set((store) => ({ tasks: [...store.tasks, { id, title, status }] })),
});

export const useStore = create(store);
