<script>
import 'bootstrap/dist/css/bootstrap.css';

import TopBar from '../components/TopBar.vue';
import CardRowList from '../components/CardRowList.vue';
import CardProduct from '../components/CardProduct.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Home',
  props: [],
	components: {
		TopBar,
    CardRowList,
    Card,
		CardProduct,
	},

	data: function() {
		return {
			categories: [
				'Suspensão',
				'Motor',
				'Pneus',
				'Embreagem',
				'Câmbio',
				'Freios',
				'Filtros',
				'Escapamentos'
			],
			bestSellers: [
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

    <CardRowList>
      <Card class="category" v-for="category in categories" v-bind:key="category">
        <span>
          {{ category }}
        </span>
      </Card>
    </CardRowList>

    <div id="vendido">
      <h3 class="lab">Mais Vendidos</h3>
      <CardRowList>
        <CardProduct v-for="product in bestSellers" v-bind:key="product" v-bind:product="product" />
      </CardRowList>
    </div>

    <div id="vendido">
      <h3 class="lab">Promoção</h3>
      <CardRowList>
        <CardProduct v-for="product in bestSellers" v-bind:key="product" v-bind:product="product" v-bind:off="true" />
      </CardRowList>
    </div>

  </div>
</template>

<style>

  #vendido {
    margin-top: 30px;
  }

  #promocao {
    margin-top: 30px;
  }

  .category {
    background: #333;
    color: #fff;
  }

  .lab {
    margin-left: 15px;
  }

</style>
