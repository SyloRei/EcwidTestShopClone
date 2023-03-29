import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@pages/HomePage.vue'
const DetailsPage = () => import('@pages/DetailsPage.vue')
const CartPageVue = () => import('@pages/CartPage.vue')
const CategoryPage = () => import('@pages/CategoryPage.vue')
const NotFoundPage = () => import('@pages/NotFoundPage.vue')

const routes: Array<RouteRecordRaw> = [
	{
		path: '/category/:categoryId',
		name: 'category',
		component: CategoryPage
	},
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/product/:id',
		name: 'product',
		component: DetailsPage
	},
	{
		path: '/cart',
		name: 'cart',
		component: CartPageVue
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundPage
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
