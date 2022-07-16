new Vue({
    el: '#app',
    data: {
        isEditing: false,
        selectedIndex: null,

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
        },

        deleteTodo(index){
            this.todos.splice(index, 1)
        },

        editTodo(index, todo){
            this.todo= todo
            this.selectedIndex = index
            this.isEditing = true
        },

        updateTodo(){
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.isEditing = false

        }
        
    }
    
    
  })