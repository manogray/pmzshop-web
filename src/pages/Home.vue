<script>
import 'bootstrap/dist/css/bootstrap.css';

import TopBar from '../components/TopBar.vue';
import CardRowList from '../components/CardRowList.vue';
import CardProduct from '../components/CardProduct.vue';
import Card from '../components/Card.vue';

import api from '../services/api';

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
			products: []
		};
	},
	methods: {
		async loadProducts(){
			const products = await api.get('products');
			console.log(products.data);
			this.products = products.data;
		},
	},
	async mounted(){
		await this.loadProducts();
	}
};
</script>

<template>
  <div>
    <TopBar v-bind:data="products" />

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
        <CardProduct v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
      </CardRowList>
    </div>

    <div id="vendido">
      <h3 class="lab">Promoção</h3>
      <CardRowList>
        <CardProduct v-for="product in products" v-bind:key="product.id" v-bind:product="product" v-bind:off="true" />
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
