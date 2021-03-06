import Vue from 'vue';
import VueRouter from 'vue-router';
import TestPage from '@/apps/TestPage/router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        TestPage
    ]
});

export default router;
