<script>
import TopBar from '../components/TopBar';
import { CreditCardIcon, Trash2Icon, PlusIcon } from 'vue-feather-icons';

export default {
	name: 'Cart',
	props: [],
	components: {
		TopBar,
		CreditCardIcon,
		Trash2Icon,
		PlusIcon,
	}
};
</script>

<template>
	<div>
		<TopBar />

		<div class="cartList">
			<h2 id="cartTitle">Carrinho</h2>

			<div class="checkoutCard card">
				<div class="item">
					<div class="itemInfo">
						<p>Roda dentada</p>
						<p>COD 55847</p>
						<p>Honda</p>
					</div>
					<div class="itemOptions">
						<div class="amount">
							<button class="roundButton">
								<trash-2-icon></trash-2-icon>
							</button>
							<p>1</p>
							<button class="roundButton">
								<plus-icon></plus-icon>
							</button>
							<p>UN</p>
						</div>
						<div class="price">
							<div>
								<p>Preço unitário</p>
								<p>R$ 15,30</p>
							</div>
							<div>
								<p>Total</p>
								<p>R$ 15,30</p>
							</div>
							<div>
								<p>Total líquido</p>
								<p class="bold-text">R$15,30</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="checkoutAttached">
				<div class="totalPrice">
					<p>Total a pagar</p>
					<h3>R$ 150,00</h3>
				</div>
				<button class="pmzButton checkout"> <credit-card-icon></credit-card-icon> Finalizar Compra</button>
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
	}

	.itemInfo {
		width: 44%;
	}

	.itemInfo p {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
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