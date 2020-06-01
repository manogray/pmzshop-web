<script>
import TopBar from '../components/TopBar';
import CardProduct from '../components/CardProduct';

import api from '../services/api';

export default {
	name: 'Search',
	props: [],
	components: {
		TopBar,
		CardProduct,
	},
	data: function(){
		return {
			products: []
		};
	},
	methods: {
		async loadSearch(){
			const products = await api.get("products?q="+this.$route.query.q);
			console.log(products.data);
			this.products = products.data;
		},
	},
	async mounted(){
		await this.loadSearch();
	}
};
</script>

<template>
	<div>
		<TopBar />

		<h2 class="searchTitle">{{ this.$route.query.q }}</h2>

		<p class="subTitle">Exibindo {{ products.length }} resultados</p>
		<div class="results">
			<CardProduct class="columnType" v-for="item in products" v-bind:key="item.id" v-bind:product="item" />
		</div>
	</div>
</template>

<style>
	.searchTitle {
		margin: 20px 15px;
	}

	.subTitle {
		margin: 0px 15px;
		font-size: 18px;
	}

	.results {
		margin: 10px 0px 10px 110px;
	}

	.columnType {
		display: block !important;
		margin-bottom: 15px;
		width: 90% !important;
	}

</style>