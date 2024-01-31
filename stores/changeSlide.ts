import { defineStore } from "pinia";

export const useOpenComponents = defineStore("openComponentsStore", {
  state: () => ({
    openDrawer: false,
  }),
  actions: {
    changeOpenDrawer(newValue: boolean) {
      this.openDrawer = newValue;
    },
  },
});
