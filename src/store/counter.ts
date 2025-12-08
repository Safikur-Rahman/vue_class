import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 5
    }),
    actions: {
        increment(){
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    getters: {
        countResult: (state) => state.count % 2 === 0 ? "Even" : "Odd"
    }
});