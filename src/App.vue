<script>
import 'bootstrap/dist/css/bootstrap.css';

import TopBar from './components/TopBar.vue';
import CardRowList from './components/CardRowList.vue';
import Card from './components/Card.vue';
import { ShoppingCartIcon } from 'vue-feather-icons';

export default {
	name: 'App',
	components: {
		TopBar,
		CardRowList,
		Card,
		ShoppingCartIcon
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
  <div id="app">
    <TopBar />

    <CardRowList>
      <Card class="category" v-for="category in categories" v-bind:key="category">
        <span>
          {{ category }}
        </span>
      </Card>
    </CardRowList>

    <div id="vendido">
      <h2>Mais Vendidos</h2>
      <CardRowList>
        <Card v-for="product in bestSellers" v-bind:key="product">
          <p class="nomeProduto">{{ product.name }}</p>
          <p class="codigoProduto">COD {{ product.cod }}</p>
          <p class="precoProduto">{{ product.price }}</p>
          <div class="roundBtnContainer">
            <button class="roundButton">
              <shopping-cart-icon></shopping-cart-icon>
            </button>
          </div>
        </Card>
      </CardRowList>
    </div>

    <div id="vendido">
      <h2>Promoção</h2>
      <CardRowList>
        <Card v-for="off in bestSellers" v-bind:key="off">
          <p class="nomeProduto">{{ off.name }}</p>
          <p class="codigoProduto">COD {{ off.cod }}</p>
          <p class="precoProduto">{{ off.price }}</p>
          <div class="roundBtnContainer">
            <button class="roundButton">
              <shopping-cart-icon></shopping-cart-icon>
            </button>
          </div>
          <div class="marcador">
            50%
          </div>
        </Card>
      </CardRowList>
    </div>

  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins&display=swap');

  #vendido {
    margin-top: 30px;
  }

  #promocao {
    margin-top: 30px;
  }

  h2 {
    margin-left: 15px;
  }

  #app {
    width: 100%;
    height: 100%;
    color: #171717;
  }

  .category {
    background: #333;
    color: #fff;
  }

  .nomeProduto {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .precoProduto {
    margin-top: 10px !important;
    width: 100%;
    font-size: 18px;
  }

  .codigoProduto {
    width: 100%;
    font-size: 10px;
  }

  .roundBtnContainer {
    display: flex;
    justify-content: flex-end;
  }

  .roundButton {
    border: none;
    border-radius: 4px;
    background: #fff;
  }

  .marcador {
    position: absolute;
    background: #009000;
    color: #fff;
    padding: 5px;
    top: 69%;
    left: -3%;
    border-radius: 0px 30px 30px 0px;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fff;
    color: white;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  h1, h2 {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
</style>
