export default {
    path: '/result',
    component: () => import(/* webpackChunkName: "Result" */ './App.vue'),
    children: [
        {
            path: '',
            name: 'result',
            component: () => import(/* webpackChunkName: "Result" */ './views/ResultPage/ResultPage.vue')
        }
    ]
};
