<template>
    <div class="swiper">
        <div class="items">

            <div
                class="item"
                v-for="(item, index) in content"
            >
                <hi id="title">{{ item.name }}</hi>
                <p id="description">{{ item.description }}</p>
            </div>

        </div>
        <div class="trigger">
            <span
                v-for="(_, index) in content"

            ></span>
        </div>
    </div>
</template>


<script setup>
const props = defineProps(['content'])
let content = props.content
</script>


<style scoped>
.swiper {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
}

.items {
    height: 100%;
    transform: translateX(-10%);
}

.item {
    display: inline-block;
    width: 100%;
    height: 100%;
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
    --size: 10px;
    background: #905050;
    display: inline-block;
    margin-right: var(--gap);
    width: var(--size);
    height: var(--size);
    border-radius: calc(var(--size) / 2);
}
</style>