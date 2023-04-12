'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: []
        }
    },
    mounted() {
        axios.get('todo.json')
            .then(response => {
                this.todos = response.data;
            });
    }


}).mount('#app');