<style scoped>
@media screen and (max-width: 800px) {
    .sidebar {
        transform: translateX(  calc( -1 * var(--panel-width) - 10px) );
        transition: transform 250ms;
    }
    .sidebar.open {
        transform: none;
        
    }
}
    .sidebar {
        z-index: 10;
        position: fixed;
        left: 0;
        top: 70px;
        bottom: 0;
        width: var(--panel-width);
        box-sizing: border-box;
        padding-top: 5px;
        padding-bottom: 20px;
        border-right: 1px solid rgba(88, 88, 88, 0.1);

        display: flex;
        flex-direction: column;
        overflow: auto;

        background: rgb(255, 255, 255);
        
        scrollbar-width: none;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar h1 {
        margin-top: 20px;
        font-size: 13px;
        padding: 13px 0 8px 17px;
        opacity: 0.5;
    }

    .sidebar .link {
        font-size: 12px;
        padding: 15px 25px;
        width: 100%;
        box-sizing: border-box;
        text-decoration: none;
        transition: all 150ms;
    }

    .sidebar .link:hover {
        background: rgb(225, 225, 225)
    }

    .sidebar .link:active {
        background: rgb(211, 211, 211)
    }

    .sidebar .link.active {
        color: #fff;
        background: var(--theme-color);
    }

    .sidebar .link.back {
        margin-top: 20px;
    }
</style>


<template>
    <div class="sidebar" :class="{open: menu}">

        <template class="group" v-for="group in links">
            <h1>{{ group.group }}</h1>
            <NuxtLink
            v-for="item in group.links"
            :href="item[1]"
            :class="{active: active(item[1])}"
            class="link">
                {{ item[0] }}
            </NuxtLink>
        </template>
    </div>
</template>


<script setup>
const menu = inject("menu")

const links = ref([
    {
        group: "Panel",
        links: [["概览", "/panel/"]]
    },
    {
        group: "内容",
        links: [
            ["文章", "/panel/article/", "文章管理"],
            ["活动", "/panel/activity/", "活动管理"],
            ["分区", "/panel/zone/", "分区管理"],
            ["标签", "/panel/tag/", "标签管理"]
        ]
    },
    {
        group: "管理",
        links: [
            ["账户设置", "/panel/self/", "账户及个人信息设置"],
            ["用户管理", "/panel/user/", "用户管理"],
            ["站点设置", "/panel/site/", "站点信息管理"]
        ]
    },
    {
        group: "返回",
        links: [["首页", "/"]]
    }
])

function active(target_url) {
    let path = useRoute().path
    let target_path = target_url
    if (path.at(-1) != "/") {
        path = path + "/"
    }

    path = path.split("/")[2]
    target_path = target_path.split("/")[2]

    if ( path == target_path ) {
        return true
    } else {
        return false
    }
}

</script>