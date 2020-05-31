<script>
export default {
	name: 'CardRowList',
	props: {}
};
</script>

<template>
    <div class="rowlist">
        <slot />
    </div>
</template>

<style scoped>
    .rowlist {
        position: relative;
        display: inline-block;
        overflow: auto;
        overflow-y: hidden;
        white-space: nowrap;
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 10px 15px;
    }

</style>