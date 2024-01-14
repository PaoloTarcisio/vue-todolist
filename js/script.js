const { createApp } = Vue;

createApp({
    data() {
      return {
        newTodo:'',
        todos: [
            {
                text: 'lorem',
                done: true,
            },
            {
                text: 'ipsum',
                done: true,
            },
            {
                text: 'dolors',
                done: false,
            },
        ]
      };
    },
    methods: {
      remove(elem) {
        console.log('ciao');
        this.todos.splice(elem, 1);
      },
      add(NewTask) {
        console.log('aggiungo');

        const NewElem = {
          text: this.newTodo,
          done: false,
        };
        this.todos.push(NewElem)

        this.newTodo = '';

      }
    }
  }).mount('#app')