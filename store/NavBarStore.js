import create from "zustand";

const useNavBarStore = create((set) => ({
  showSideBar: true,
  setShowSideBar: () => set((state) => ({ showSideBar: !state.showSideBar })),
}));

export default useNavBarStore;
