'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    mounted() {
        axios.get('todo.json')
            .then(response => {
                this.todos = response.data;
            });
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                });
                this.newTodo = '';
            }
        }
    }

}).mount('#app');