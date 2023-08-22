<style scoped>
.form {
    border-radius: 2px;
    padding: 25px;
    margin-bottom: 15px;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.02);
}


.logout {
    color: #985a5a;
    border: 2px #d18686 solid;
    border-radius: 1px;
    background: rgb(255, 255, 255);
    width: 100%;
    box-sizing: border-box;
    padding: 8px 24px;
    transition: all 200ms;
}
.logout:hover {
    color: #ffffff;
    border: 2px rgb(225, 84, 81) solid;
    background: rgb(225, 84, 81);
}
.logout:active {
    color: #ffffff;
    border: 2px rgb(170, 64, 62) solid;
    background: rgb(170, 64, 62);
}
</style>


<template>
    <Notice ref="notice" />

    <div class="form">
        <div class="avatar">

        </div>
        <div class="item">
            <!-- <span class="name">账号</span>
            <input class="value" type="text" v-model="account"> -->
        </div>
        <div class="item">
            <!-- <span class="name" autocomplete="off">密码</span>
            <input class="value" type="password" v-model="password"> -->
        </div>
        <div class="button">
            <!-- <button class="submit" @click="submit()">登录</button> -->
        </div>

    </div>
</template>


<script setup>
definePageMeta({
  layout: "panel",
});


// const notice = ref(null)
function logout() {
    notice.value.add("success", "退出登录成功", "即将返回主页", 1)
    setTimeout(()=>{
        // 设置token
        const cookie = useCookie('token')
        cookie.value = undefined
        // 重定向
        useRouter().push('/')
    }, 1000)
}
</script>