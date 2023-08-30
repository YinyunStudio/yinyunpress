<style scoped>
    .navbar {
        position: sticky;
        top: 0;
        width: 100%;
        margin-bottom: 5px;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #fff;
        box-shadow: 0 -10px 15px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .container {
        width: min(100%, var(--view-width));
        height: 100%;
        padding: 5px 15px;
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
    }

    h1 {
        all: unset;
        font-family: sans-serif;
        font-size: 1.2em;
    }

    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .link {
        color: unset;
        text-decoration: none;
        /* padding: 10px; */
        margin-left: 20px;
        font: 1em;
        white-space: nowrap;
    }

    @media screen and (max-width: 500px) {
    .container {
        font-size: 0.8rem;
        height: 65px;
    }
    }
    @media screen and (min-width: 500px) {
    .container {
        font-size: 1rem;
        height: 55px;
    }
    }
</style>


<template>
    <div class="navbar">  
        <div class="container">
            <div class="title">
                <img v-if="title.icon != false" :src="'/'+title.icon" alt="logo">
                <h1 v-if="title.name != false">{{ title.name }}</h1>
            </div>
            <div class="links">
                <NuxtLink
                  v-for="item in links"
                  class="link"
                  :href="item[1]"
                >{{ item[0] }}</NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup>
const { data, pending, error, refresh } = await useFetch('/api/meta/nav')
const links = data.value.data.nav
const title = data.value.data.title
</script>