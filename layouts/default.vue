<style scoped>
    .body {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: var(--bg-color);

        scrollbar-width: thin;
        scrollbar-color: #a6a6a6 #f4f6f9;
    }
    .body::-webkit-scrollbar {
        width: 5px;
        background-color: var(--bg-color);
    }
    .body::-webkit-scrollbar-thumb {
        background-color: #a6a6a6;
        border-radius: 2.5px;
    }
</style>


<template>
<div class="body">
    <PageNavbar/>
    <slot /> 
    <PageFooter />
</div>
</template>


<script setup>

</script>