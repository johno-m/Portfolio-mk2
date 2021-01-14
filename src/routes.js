import MainView from './views/Page-Main'
import PortfolioView from './views/Page-Portfolio';
import AboutView from './views/Page-About';
import ContactView from './views/Page-Main';

export const routes = [
    { path: '/', component: MainView, name: 'MainView'},
    { path: '/portfolio', component: PortfolioView, name: 'PortfolioView'},
    { path: '/about', component: AboutView, name: 'AboutView'},
    { path: '/contact', component: ContactView, name: 'ContactView'}
    
]

