<script>
export default {
	name: 'Card',
	props: []
};
</script>

<template>
	<div class="card">
		<slot />
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

	p {
        margin-bottom: 6px;
    }
</style>