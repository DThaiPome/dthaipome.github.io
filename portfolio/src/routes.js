import HomePage from './components/views/HomePage.vue';
import AboutPage from './components/views/AboutPage.vue';

export default [
    {path: '*', HomePage},
    { path: '/', HomePage},
    { path: '/about', AboutPage}
]