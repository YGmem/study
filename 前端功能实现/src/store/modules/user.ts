import { defineStore } from 'pinia'

interface State {
  name: string
  age: number
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    name: '',
    age: 0
  }),
  getters: {
    displayName(state: State): string {
      return `${state.name} is ${state.age} years old`
    }
  },
  actions: {
    setName(newName: string) {
      this.name = newName
    },
    setAge(newAge: number) {
      this.age = newAge
    }
  }
})