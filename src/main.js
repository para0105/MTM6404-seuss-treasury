import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Books from './views/Books.vue'
import Book from './views/Book.vue'
import Quotes from './views/Quotes.vue'

// routes array
const routes = [
    {
        path: '/',
        name: 'Books',
        component: Books
    },
    {
        // :id is the dynamic segment that will be retrieved from the API
        path: '/Book/:id',
        name: 'Book',
        component: Book,
        // for a component that has a dynamic segment, we should set the props to true
        props: true
    },
    {
        path: '/Quotes/',
        name: 'Quotes',
        component: Quotes
    }
]

// create a new router
const router = createRouter({
    history: createWebHashHistory(),
    // call the routes array
    routes: routes
})

createApp(App).use(router).mount('#app')
