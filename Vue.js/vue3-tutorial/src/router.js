import VueRouter from 'vue-router';
import FamilyMembers from './components/FamilyMembers'
import CalendarApp from './components/CalendarApp'

const routes = [
    { path: '/family-member', component: FamilyMembers },
    { path: '/calendar', component: CalendarApp },
];

const router = VueRouter.createRouter({
    routes,
});

export default router;