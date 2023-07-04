<template>
    <div>
        <Banner
            id="banner"
            :press="presses"
        />
    </div>
</template>

<script setup>
const presses = reactive([
    {name: "第一篇文章", description: "测试用的"},
    {name: "第二篇文章", description: "测试用的"},
    {name: "第三篇文章", description: "测试用的"},
    {name: "第四篇文章", description: "测试用的"},
    {name: "第五篇文章", description: "测试用的"},
    {name: "第六篇文章", description: "测试用的"},
    {name: "第七篇文章", description: "测试用的"},
    {name: "第八篇文章", description: "测试用的"},
    {name: "第九篇文章", description: "测试用的"},
    {name: "第十篇文章", description: "测试用的"}
])
</script>

<style scoped>
    #banner {
        width: 100vw;
        height: 700px;
    }
</style>