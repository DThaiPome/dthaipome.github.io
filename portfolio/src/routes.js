import HomePage from './components/views/HomePage.vue';
import AboutPage from './components/views/AboutPage.vue';

export default [
    {path: '*', component: HomePage},
    { path: '/', component: HomePage},
    { path: '/about', component: AboutPage}
]