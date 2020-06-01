import Vue from 'vue';
import Vuex from 'vuex';

import api from './services/api';

Vue.use(Vuex);

const state = { 
	cart: [],
	token: null,
	signed: false,
	user: null,
};

const actions = {
	addCart({ commit }, product){
		commit('addCart', product);
	},
	increaseItem({ commit }, product){
		commit('increaseItem', product);
	},
	decreaseItem({ commit }, product){
		commit('decreaseItem', product);
	},
	removeItem({ commit }, product){
		commit('removeItem', product);
	},
	buy({ commit }){
		commit('buy');
	},
	async signIn({ commit }, user){
		const response = await api.post('sessions', {
			email: user.email,
			passwd: user.password
		});

		commit('signIn', response.data);
	}
};

const mutations = {
	addCart(state, payload){
		state.cart.push(payload);
	},
	increaseItem(state, payload){
		let index = state.cart.findIndex(x => x.id === payload.id);
		console.log(payload);
		console.log(index);
		state.cart[index].amount++;
	},
	decreaseItem(state, payload){
		let index = state.cart.findIndex(x => x.id === payload.id);
		console.log(index);
		state.cart[index].amount--;
	},
	removeItem(state, payload){
		let index = state.cart.indexOf(payload);
		if(index > -1){
			state.cart.splice(index,1);
		}
	},
	buy(state){
		state.cart = [];
	},
	signIn(state, payload){
		state.token = payload.token;
		state.signed = true;
		state.user = payload.user;
		console.log(payload);
	}
};

const store = new Vuex.Store({
	state,
	actions,
	mutations
});

export default store;