/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import FamilyMembers from './pages/FamilyMembers'
import CalendarApp from './pages/CalendarApp'
import HomePage from './pages/HomePage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/family-members', component: FamilyMembers },
    { path: '/calendar', component: CalendarApp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;