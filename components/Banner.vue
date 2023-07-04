<template>
    <div class="banner">
        <BannerItem
            v-for="a in press"
            :press="a"
        />
    </div>
</template>

<script setup>
    const props = defineProps(['press'])
    let press = props.press
</script>

<style scoped>
    .banber {
        position: relative;
        white-space:nowrap;
        overflow: hidden;
    }

    .items {
        transform: translateX(100%);
    }

    .trigger {
        position: absolute;
        bottom: 10px;
        padding-left: 15px;
    }

    .trigger span {
        background: #000;
        margin-right: 15px;
        display: inline-block;
        --size: 10px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
    }
</style>