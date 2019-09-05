import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {status: 'completed', content: '吃饭'},
      {status: 'completed', content: '睡觉'},
      {status: 'completed', content: '打豆豆'}
  ],


  },
  mutations: {
    initTodos:function(state,todos){
      state.todoList=todos
     },

  },
  actions: {
    createTodos(context){
      const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
        axios.post(url,{context}).then(function(response){
            context.dispatch("fetchtodos")
            //     console.log(35)
                console.log(response)
           })           
     },

  }
})
