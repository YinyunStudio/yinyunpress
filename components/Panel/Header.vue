<style scoped>
.header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 0 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #fff;
    box-shadow: 0 -10px 15px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.container {
    width: min(100%, var(--view-width));
    box-sizing: border-box;
    padding: 20px;
}

h1 {
    font-size: 24px;
}

h1 a {
    text-decoration: none;
}

p {
    font-size: 14px;
}

@media screen and (min-width: 800px) {
    .button {
        display: none !important;
    }
}

.button {
    all: unset;
    width: 22px;
    height: 18px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: none !important;
}

.button span {
    display: block;
    width: 100%;
    height: 2px;
    background: rgb(46, 46, 46);
    border-radius: 1px;
    transition: transform 300ms ease-in-out;
}

.button.active span {
    transition: transform 200ms ease-in-out;
}

.button span.t {
    transform-origin: 0% 50%
}

.button span.b {
    transform-origin: 100% 50%
}

.button.active span.t {
    transform-origin: 100% 50%
}

.button.active span.b {
    transform-origin: 0% 50%
}

.button.active span.t, .button.active span.b {
    /* width: 0; */
    transform: scaleX(0);
}

.button span.c {
    align-self: center;
    position: relative;
    background: none;
}

.button span.c span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(46, 46, 46);
    transition: all 250ms;
}

.button.active span.c span.o {
    transform: rotate(45deg);
}

.button.active span.c span.e {
    transform: rotate(-45deg);
}
</style>


<template>
    <div class="header">
            <div class="title">
                <h1>管理面板</h1>
                <p>{{ subtitle }}</p>
            </div>
            <button
            class="button"
            :class="{active: menu}"
            @click="click()">
                <span class="t"></span>
                <span class="c">
                    <span class="o"></span>
                    <span class="e"></span>
                </span>
                <span class="b"></span>
            </button>
        </div>
</template>

<script setup>
const subtitle =  inject("subtitle")
const menu = inject("menu")
function click() {
    menu.value = !menu.value
}
</script>