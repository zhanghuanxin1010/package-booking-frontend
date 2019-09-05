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
    createTodos(context,values){
      const url="http://localhost:8089/inputPage";
        axios
        .post(url,values)
        .then(function(response){
            // context.dispatch("fetchtodos")
            //     console.log(35)
                console.log(response)
           })           
     },
     fetchtodos(context){
      const url="http://localhost:8089/inputPage";
      axios.get(url).then(function(response){
          // context.commit('initTodos',response.data);
          // console.log(30)
           console.log(response)
      }
      )
     },


  }

})
