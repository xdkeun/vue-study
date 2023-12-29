import { defineStore } from "pinia";

export const useNumberStore = defineStore({
  id: "number",
  state: () => ({
    number: 0,
  }),
  actions: {
    plus() {
      this.number++;
    },
    minus() {
      this.number--;
    },
    customPlus(customNumber) {
      if (customNumber === 0) {
        alert(`${customNumber}은 더해도 소용이 없습니다`);
        return;
      }
      this.number += customNumber;
      alert(`${customNumber}가 더해져서 ${this.number}가 됩니다`);
    },
  },
});
