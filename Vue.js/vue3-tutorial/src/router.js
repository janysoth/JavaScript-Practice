import { createRouter, createWebHashHistory } from "vue-router";
import FamilyMembers from './components/FamilyMembers'
import CalendarApp from './components/CalendarApp'

const routes = [
    { path: '/family-members', component: FamilyMembers },
    { path: '/calendar', component: CalendarApp },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;