const { createApp } = Vue;

createApp({
    data() {
      return {
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
      deleted() {
        console.log('ciao')
      }
    }
  }).mount('#app')