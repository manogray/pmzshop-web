<script>
import { SearchIcon, ShoppingCartIcon } from 'vue-feather-icons';

export default {
	name: 'TopBar',
	props: ['data'],
	data: function() {
		return {
			query: '',
			visible: false,
			sig: this.$store.state.signed
		};
	},
	components: {
		SearchIcon,
		ShoppingCartIcon
	},
	methods: {
		toggleVisible(){
			this.visible =! this.visible;
		},
		itemClicked(text){
			this.$refs.searchInput.value = text;
			this.$router.push({ path: 'search', query: { q: text } });
		}
	},
	computed: {
		matches() {
			if(this.query == ''){
				return [];
			}

			console.log(this.data);

			return this.data.filter((item) => item.name.toLowerCase().includes(this.query.toLowerCase()));
		}
	}
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark primary-color">
		<router-link class="navbar-brand" to="/">
			<img src="../assets/logo.png" alt="">
		</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="input-group input-group-lg" id="searchbar">
			<div class="input-group-prepend">
				<span class="input-group-text" id="inputGroup-sizing-lg"><search-icon></search-icon></span>
			</div>
			<input type="text" id="searchInput" ref="searchInput" placeholder="Pesquisar produtos" v-on:focus.native="toggleVisible" v-model="query" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
			<div class="popover pop">
				<ul>
					<li 
						v-for="item in matches" 
						v-bind:key="item.name" 
						v-text="item.name"
						v-on:click="itemClicked(item.name)"
					>
					</li>
				</ul>
			</div>
		</div>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li>
					<a href="" v-if="sig">
						{{ $store.state.user.name }}
					</a>
					<router-link v-else class="nav-link" to="login">
						Login
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="checkout">
						<shopping-cart-icon class="white-color" size="2x"></shopping-cart-icon>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
	img {
		width: 150px;
	}

	.white-color {
		color: #fff;
	}

	#searchbar {
		position: relative;
		width: 60%;
	}

	.pop {
		top: 98%;
		left: 7%;
		width: 93%;
		max-width: none;
		border-radius: 0px 0px 6px 6px;
		border-top: none;
	}

	.pop ul {
		margin-bottom: 0;
	}

	.pop ul li {
		font-weight: bold;
		padding: 10px 5px;
		cursor: pointer;
	}

	.pop ul li:hover {
		background: #99d8ca;
	}

	#navbarNav {
		justify-content: flex-end;
	}
</style>
