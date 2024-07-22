import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {

    state: () => ({
        alert: {} ||null
    }),
    actions: {
        success(message: object) {
            this.alert = { message, type: 'alert-success' };
        },
        error(message: object) {
            this.alert = { message, type: 'alert-danger' };
        },
        clear() {
            this.alert = null;
        }
    }
});