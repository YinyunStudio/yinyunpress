<style scoped>
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

.box {
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 25px;
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.02);
}

.box .title {
    font-size: 18px;
    margin-bottom: 7px;
}

.box.nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
    scrollbar-color: #a6a6a6 #f4f6f9;
}
.box.nav::-webkit-scrollbar {
    height: 4px;
    background-color: var(--bg-color);
}
.box.nav::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 2px;
}

.box.nav .title {
    position: sticky;
    left: 0;
}

.link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    margin-bottom: 10px;
}

.nav-move,
.nav-enter-active,
.nav-leave-active {
    transition: margin-bottom 200ms, opacity 200ms;
}

.nav-enter-from,
.nav-leave-to {
    margin-bottom: -30px;
    opacity: 0;
}
.nav-leave-active {
    position: relative;
}

.link label {
    margin-right: 18px;
    white-space: nowrap;
}

.link label span {
    margin-right: 6px;
}

.link label input {
    width: 140px;
}

.link button {
    white-space: nowrap;
}

.link button.sort {
    /* cursor: move; */
}

.link button.dalete {
    margin-left: 9px;
    --color: #cb3f29;
}

.box.nav .button {
    position: sticky;
    left: 0;
    margin-top: 3px;
}

.box.nav .button button {
    margin-right: 7px;
}

.box.nav .button .add {
    --color: #62ba2c;
}

.box.nav .button .reset, .link button.sort {
    --color: #cf8325;
}

.box.nav .button .update {
    --color: #17bdc0;
}
</style>


<template>
    <div class="box">
        <h1 class="title">站点信息</h1>
        
    </div>
    <div class="box nav">
        <h1 class="title">导航</h1>
        <TransitionGroup name="nav">
            <div class="link" v-for="(item,index) in navs" :key="index">
                <label><span>名称</span><input v-model="item[0]" class="name" type="text"></label><!---->
                <label><span>地址</span><input v-model="item[1]" class="address" type="text"></label>
                <button class="sort chollowed" @click="nav_up(index)">上移</button>
                <button class="dalete" @click="nav_dalete(index)">删除</button>
            </div>
        </TransitionGroup>
        <div class="button">
            <button @click="nav_add()" class="add chollowed">添加</button>
            <button @click="nav_reset()" class="reset chollowed">还原</button>
            <button @click="nav_update()" class="update">保存</button>
        </div>
    </div>
    <Notice ref="notice" />
</template>


<script setup>
definePageMeta({
  layout: "panel",
});

const { data: data } = await useFetch('/api/meta/nav')
const navs = ref( JSON.parse(JSON.stringify( data.value.data.nav )) )


function nav_dalete(index) {
    navs.value.splice(index, 1)
}

function nav_up(index) {
    if (index == 0) return
    const tmp = navs.value[index-1]
    navs.value[index-1] = navs.value[index]
    navs.value[index] = tmp
}

function nav_add() {
    navs.value.push(["", ""])
}

function nav_reset() {
    navs.value = JSON.parse(JSON.stringify( data.value.data.nav ))
}

const notice = ref(null)

async function nav_update() {
    const { data: { value: update_result }} = await useFetch('/api/panel/a/site/nav',{
        method: "POST",
        body: {
            nav: JSON.parse(JSON.stringify( navs.value ))
        }
    })
    if ( update_result.state == true ) {
        notice.value.add("success", "更改成功", "导航更新成功")
    } else {
        notice.value.add("failed", "更新失败")
    }
}
</script>