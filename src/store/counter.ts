import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: Number(localStorage.getItem('count')) || 0
    }),
    actions: {
        increment(){
            this.count++
            this.setLocal();
        },
        decrement() {
            this.count--
            this.setLocal();
        },
        setLocal(){
            localStorage.setItem('count',this.count.toString());
        }

    },
    getters: {
        countResult: (state) => state.count % 2 === 0 ? "Even" : "Odd",
    }
});