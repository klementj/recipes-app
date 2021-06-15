import {createRouter, createWebHistory } from 'vue-router';

import TheMain from './pages/TheMain.vue';
import NotFound from './pages/NotFound.vue';
import TheRecipe from './pages/TheRecipe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {path: '/', redirect: '/main'},
        {
            name: 'main',
            path: '/main',
            alias: '/',
            component: TheMain
        },
        { name: 'recipe', path: '/recipe/:recipeId', component: TheRecipe, props:true},
        { name: 'step', path: '/recipe/:recipeId/:step', component: TheRecipe, props:true},
        
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if(savedPosition){
            return savedPosition;
        }
        return {left: 0, top: 0};
    }
});

export default router;