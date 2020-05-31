<script>
import { SearchIcon, ShoppingCartIcon } from 'vue-feather-icons';

export default {
	name: 'TopBar',
	props: {},
	components: {
		SearchIcon,
		ShoppingCartIcon
	}
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark primary-color">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="input-group input-group-lg" id="searchbar">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg"><search-icon></search-icon></span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <shopping-cart-icon class="white-color" size="2x"></shopping-cart-icon>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  img {
    width: 150px;
  }

  .primary-color {
    background: #05304b;
  }

  .white-color {
    color: #fff;
  }

  #searchbar {
    width: 60%;
  }

  #navbarNav {
    justify-content: flex-end;
  }
</style>
