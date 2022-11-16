import { createRouter, createWebHashHistory } from "vue-router";

import hi from './components/HelloWorld.vue'

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: hi
        },
    ]
})