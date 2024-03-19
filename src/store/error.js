import { defineStore } from 'pinia'

export const useErrorStore = defineStore({
  state: () => ({
    isError: false,
    errorMsg: '',
  }),
    actions: {
        pushError(error){
            console.log(error)
            this.errorMsg = error.data
            this.isError = true
        },
        popError() {
            this.isError = false
        },
    },
})