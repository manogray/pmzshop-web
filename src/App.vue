<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins&display=swap');

  #app {
    width: 100%;
    height: 100%;
    color: #171717;
  }

  .primary-color {
    background: #05304b !important;
  }

  .pmzButton {
	background: #0092ff;
	font-family: 'Montserrat', sans-serif;
	padding: 5px 20px;
	border: none;
	outline: none;
	border-radius: 4px;
	color: #fff;
  }

  .roundButton {
    border: none;
    border-radius: 4px;
    background: #fff;
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

  html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #e8e8e8 !important;
    color: white;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  h1, h2, h3 {
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
