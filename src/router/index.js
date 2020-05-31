import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Search from '../pages/Search';

Vue.use(Router);

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'login',
		path: '/login',
		component: Login
	},
	{
		name: 'cart',
		path: '/checkout',
		component: Cart,
	},
	{
		name: 'search',
		path: '/search',
		component: Search,
	}
];

const router = new Router({ routes });

export default router;