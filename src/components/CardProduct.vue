<script>
import { ShoppingCartIcon } from 'vue-feather-icons';

export default {
	name: 'CardProduct',
    props: ['product', 'off'],
    components: {
        ShoppingCartIcon,
    }
};
</script>

<template>
    <div class="card">
        <p class="nomeProduto">{{ product.name }}</p>
        <p class="codigoProduto">COD {{ product.cod }}</p>
        <p class="precoProduto">{{ product.price }}</p>
        <div class="roundBtnContainer">
            <button class="roundButton">
                <shopping-cart-icon></shopping-cart-icon>
            </button>
        </div>
        <div v-if="off" class="marcador">
            50%
        </div>
    </div>
</template>

<style scoped>
    .card {
        position: relative;
        display: inline-block;
        flex-direction: column;
        justify-content: flex-end;
        width: 230px;
        min-height: 130px;
        padding: 10px 30px;
        margin-right: 20px;
        box-shadow: 2px 1px 5px #ccc;
    }

    .nomeProduto {
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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

    .marcador {
        position: absolute;
        background: #009000;
        color: #fff;
        padding: 5px;
        top: 69%;
        left: -3%;
        border-radius: 0px 30px 30px 0px;
    }

    p {
        margin-bottom: 6px;
    }
</style>