<script>
import TopBar from '../components/TopBar';
import CardProduct from '../components/CardProduct';

export default {
	name: 'Search',
	props: [],
	components: {
		TopBar,
		CardProduct,
	},
	data: function() {
		return {
			items: [
				{
					name: 'Motor 0KM VW 2.0',
					cod: '554875',
					price: 'R$ 1500,00'
				},
				{
					name: 'Pneu aro 15 Vulcanizado',
					cod: '554875',
					price: 'R$ 2999,00'
				},
				{
					name: 'Caixa de Câmbio 5 posições',
					cod: '554875',
					price: 'R$ 899,00'
				},
				{
					name: 'Motor 0KM VW 1.0 Flex',
					cod: '554875',
					price: 'R$ 1199,00'
				},
				{
					name: 'Motor 0KM VW 2.0',
					cod: '554875',
					price: 'R$ 1500,00'
				}
			]
		};
	}
};
</script>

<template>
	<div>
		<TopBar />

		<h2 class="searchTitle">{{ this.$route.query.q }}</h2>

		<p class="subTitle">Exibindo 20 resultados</p>
		<div class="results">
			<CardProduct class="columnType" v-for="item in items" v-bind:key="item.name" v-bind:product="item" />
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