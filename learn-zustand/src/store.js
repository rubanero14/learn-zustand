import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [
    {
      id: 12233241,
      title: "Rainbow Dash",
      status: "planned",
    },
    {
      id: 12233242,
      title: "Bambi",
      status: "ongoing",
    },
    {
      id: 12233243,
      title: "Mickey",
      status: "done",
    },
  ],
  addTask: (id, title, status) =>
    set(
      (state) => ({ tasks: [...state.tasks, { id, title, status }] }),
      false,
      "Add Task"
    ),
  deleteTask: (id) =>
    set(
      (state) => ({
        tasks: [...state.tasks.filter((task) => task.id !== id)],
      }),
      false,
      "Delete Task"
    ),
  isModalOpen: false,
  setIsModalOpen: (bool) =>
    set(
      (state) => ({
        isModalOpen: bool ? bool : !state.isModalOpen,
      }),
      false,
      "Add New Task and Modal Open"
    ),
  modalStatus: "",
  setModalStatus: (state) =>
    set(() => ({ modalStatus: state }), false, "Set Modal Status"),
  draggedTask: null,
  setDraggedTask: (id) => set({ draggedTask: id }, false, "Set Dragged Task"),
  movedTask: (id, title, status) =>
    set(
      (state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { id, title, status } : task
        ),
      }),
      false,
      "Set Moved Task"
    ),
});

// Custom middleware like logging functionality
const logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

// persist() middleware takes 2 params, devtools and localStorage key nme, its purpose is to persist data changes within browser cache
// devtools() middleware takes in 1 param which is store, where it will be used to debug and watch state changes in browser extension Redux Devtools
// In order to both work nicely, wrap devtools() middleware with persist() middleware and lastly wrap them both inside create() middleware
export const useStore = create(
  logger(persist(devtools(store), { name: "store" }))
);
