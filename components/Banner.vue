<template>
    <div class="banner">
        <div class="items">
            <BannerItem
                v-for="a in press"
                :press="a"
            />
        </div>
        <div class="trigger">
            <span v-for="a in press"></span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['press'])
    let press = props.press
</script>

<style scoped>
    .banner {
        position: relative;
        white-space:nowrap;
        overflow: hidden;
    }

    .items {
        /* transform: translateX(100%); */
    }

    .trigger {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        --gap: 15px;
        padding-left: var(--gap);
    }

    .trigger span {
        background: #000;
        margin-right: var(--gap);
        display: inline-block;
        --size: 10px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
    }
</style>