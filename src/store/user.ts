import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || {id: 1, name: 'Safikur'}
    }),
    actions: {
        
        setLocal(){
            localStorage.setItem('user', JSON.stringify(this.user));
        }

    },
});