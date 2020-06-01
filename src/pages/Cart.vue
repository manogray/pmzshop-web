<script>
import TopBar from '../components/TopBar';
import { CreditCardIcon, Trash2Icon, PlusIcon, MinusIcon } from 'vue-feather-icons';

import api from '../services/api';

export default {
	name: 'Cart',
	props: [],
	components: {
		TopBar,
		CreditCardIcon,
		Trash2Icon,
		PlusIcon,
		MinusIcon
	},
	methods: {
		increaseAmount(product){
			this.$store.dispatch('increaseItem', product);
		},
		decreaseAmount(product){
			this.$store.dispatch('decreaseItem', product);
		},
		removeCart(product){
			this.$store.dispatch('removeItem', product);
		},
		async buy(){
			if(this.$store.state.signed){
				const order = await api.post('orders', {
					total: this.totalprice
				}, {
					headers: {
						Authorization: "Bearer " + this.$store.state.token
					}
				});
				
				this.cart.map(async item => {
					await api.post("orders/"+order.data.id+"/products/"+item.id, {
						unit: item.amount
					}, {
						headers: {
							Authorization: "Bearer " + this.$store.state.token
						}
					});
				});

				await api.put("orders/"+order.data.id+"/confirmed",{},{
					headers: {
						Authorization: "Bearer " + this.$store.state.token
					}
				});

				this.$toast.success("Pedido "+order.data.id+" Finalizado");
				this.$store.dispatch('buy');
				this.$router.push('/');
				
			}else {
				this.$router.push({ path: 'login', query: { cart: 'continue' } });
			}
		}
	},
	computed: {
		cart() {
			console.log(this.$store.state.cart);
			return this.$store.state.cart;
		},

		totalprice(){
			let sum = 0;
			this.cart.forEach((item) => {
				sum = sum + (item.price * item.amount); 
			});

			return sum;
		}
	}
};
</script>

<template>
	<div>
		<TopBar />

		<div class="cartList">
			<h2 id="cartTitle">Carrinho</h2>

			<div class="checkoutCard card">
				<div class="item" v-for="item in cart" v-bind:key="item.id">
					<div class="itemInfo">
						<p>{{ item.name }}</p>
						<small>COD {{ item.id }}</small>
						<p>{{ item.description }}</p>
					</div>
					<div class="itemOptions">
						<div class="amount">
							<button v-on:click="removeCart(item)" class="roundButton">
								<trash-2-icon></trash-2-icon>
							</button>
							<button v-on:click="decreaseAmount(item)" class="roundButton">
								<minus-icon></minus-icon>
							</button>
							<p>{{ item.amount }}</p>
							<button v-on:click="increaseAmount(item)" class="roundButton">
								<plus-icon></plus-icon>
							</button>
							<p>UN</p>
						</div>
						<div class="price">
							<div>
								<p>Preço unitário</p>
								<p>R$ {{ item.price }}</p>
							</div>
							<div>
								<p>Total</p>
								<p>R$ {{ item.price*item.amount }}</p>
							</div>
							<div>
								<p>Total líquido</p>
								<p class="bold-text">R$ {{ item.price*item.amount }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="checkoutAttached">
				<div class="totalPrice">
					<p>Total a pagar</p>
					<h3>R$ {{ totalprice }}</h3>
				</div>
				<button v-on:click="buy" class="pmzButton checkout"> <credit-card-icon></credit-card-icon> Finalizar Compra</button>
			</div>
		</div>

	</div>
</template>

<style>
	#cartTitle {
		margin-bottom: 35px;
	}

	.cartList {
		margin: 100px;
	}

	.checkoutCard {
		border: 2px solid #05304b;
		border-radius: 6px 6px 0px 0px;
		padding: 20px;
	}

	.item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #696969;
		padding: 16px 0px;
	}

	.itemInfo {
		width: 44%;
	}

	.itemInfo p {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0;
	}

	.amount, .price, .itemOptions {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.itemOptions {
		width: 55%;
	}

	.amount {
		width: 25%;
	}

	.amount p {
		margin: 0;
		color: #696969;
	}

	.price {
		width: 85%;
	}

	.price div p {
		color: #696969;
	}

	.bold-text {
		color: #000 !important;
		font-weight: bold;
	}

	.checkoutAttached {
		background: #05304b;
		color: #fff;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-radius: 0px 0px 6px 6px;
	}

	.totalPrice {
		text-align: right;
	}

	.totalPrice p {
		font-size: 13px;
	}

	.checkout {
		text-transform: uppercase;
		height: 50px;
		margin: 40px;
	}
</style>