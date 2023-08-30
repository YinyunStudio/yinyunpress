<style scoped>
    .box {
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        padding: 25px;
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.02);
    }

    .editer {
        border-radius: 2px;
        border: none;
        /* border-top: #000 solid 3px; */
        /* background: linear-gradient(45deg, hsl(12, 0%, 99%), hsl(0, 0%, 97%)); */
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    }
</style>


<template>
    <div class="box">
        <h1>1111</h1>
        <br><br><br><br><br><br><br><br>
        <Editer class="editer"></Editer>
        <br><br><br><br><br><br><br><br>
    </div>
</template>


<script setup>
definePageMeta({
    layout: "panel",
});
onMounted(() => {
    inject("subtitle").value = "发布文章"
})
</script>