<style scoped>

</style>


<template>
    {{ props.error.statusCode }}
</template>


<script setup>
    const props = defineProps(["error"])
    // console.log(props.error)
</script>