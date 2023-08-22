<style scoped>
    .body {
        --bg-color: #fcfcfc;
        --panel-width: min(245px, 100vw);

        height: 100vh;
        overflow-y: auto;
        background: var(--bg-color);

        scrollbar-width: thin;
        scrollbar-color: #a6a6a6 var(--bg-color);
    }
    .body::-webkit-scrollbar {
        width: 5px;
        background-color: var(--bg-color);
    }
    .body::-webkit-scrollbar-thumb {
        background-color: #a6a6a6;
        border-radius: 2.5px;
    }

    @media screen and (max-width: 800px) {
        .content {
            margin-left: 0;
        }
    }

    @media screen and (min-width: 800px) {
        .content {
            margin-left: var(--panel-width);
        }
    }

    .content {
        padding: 20px;
        box-sizing: border-box;
    }
</style>


<template>
    <div class="body">
        <PanelHeader />
        <PanelSidebar/>
        <div class="content">
            <slot />
            <PanelFooter />
        </div>
    </div>
</template>


<script setup>
const subtitle = ref("")
provide("subtitle", subtitle)
onUpdated(() => {
    subtitle.value = ""
})

const menu = ref(false)
provide("menu", menu)
</script>