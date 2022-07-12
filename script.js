new Vue({
    el: '#app',
    data: {

        todo: "",

        todos: [
            "visit the saloon",
            "visit my mom",
            "visit norway"
        ]
      
    },

    methods: {
        addTodo(){
            this.todos.push(this.todo)
            this.todo = ""
        }
        
    }
    
    
  })