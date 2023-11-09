import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      id: 12233241,
      title: "Test Zustand",
      status: "planned",
    },
    {
      id: 12233242,
      title: "Test Zustand",
      status: "ongoing",
    },
    {
      id: 12233243,
      title: "Test Zustand",
      status: "done",
    },
  ],
  addTask: (id, title, status) =>
    set((state) => ({ tasks: [...state.tasks, { id, title, status }] })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: [...state.tasks.filter((task) => task.id !== id)],
    })),
  isModalOpen: false,
  setIsModalOpen: (bool) =>
    set((state) => ({
      isModalOpen: bool ? bool : !state.isModalOpen,
    })),
  modalStatus: "",
  setModalStatus: (state) => set(() => ({ modalStatus: state })),
});

export const useStore = create(store);
