/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import FamilyMembers from './pages/FamilyMembers';
import CalendarApp from './pages/CalendarApp';
import HomePage from './pages/HomePage';
import MarkDown from './pages/MarkDown';
import SliderApp from './pages/SliderApp';
import CalculatorApp from './pages/CalculatorApp';
import BillingPlanView from './pages/BillingPlanView';;
import ReusableModal from './pages/ReusableModal';;

const routes = [
    { path: '/', component: HomePage },
    { path: '/family-members', component: FamilyMembers },
    { path: '/calendar', component: CalendarApp },
    { path: '/markdown', component: MarkDown },
    { path: '/slider', component: SliderApp },
    { path: '/calculator', component: CalculatorApp },
    { path: '/billing-plan-view', component: BillingPlanView },
    { path: '/reusable-modal', component: ReusableModal },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;