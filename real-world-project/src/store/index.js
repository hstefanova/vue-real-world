import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Johnson'
    },
    categories: ['sustainability', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, title: 'event title 1...' },
      { id: 2, title: 'event title 2...' },
      { id: 3, title: 'event title 3...' },
      { id: 4, title: 'event title 4...' }
    ],
    counter: 0
  },
  mutations: {
    INCREMENT_COUNTER(state, value) {
      state.counter += value
    }
  },
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done).length
    },
    activeTodos: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
