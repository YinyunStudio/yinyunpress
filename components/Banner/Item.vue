<template>
    <div>
        <hi id="title">
        <slot name="title"></slot>
        </hi>
        <p id="description">
        <slot name="description"></slot>
        </p>
    </div>
</template>

<script setup>
</script>

<style scoped>
    div {
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>