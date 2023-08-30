<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    
    scrollbar-width: thin;
    scrollbar-color: #a6a6a6 transparent;
}
.main::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}
.main::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 2.5px;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(~/assets/img/login/11.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.login {
    display: flex;

    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
}

.left {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.left .img {
    display: flex;
    justify-content: center;
}

.right  {
    box-sizing: border-box;
    padding: 35px 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form h1 {
    font-size: 24px;
    margin-bottom: 28px;
    letter-spacing: 1px;
}

.form .item {
    font-size: 14px;
    margin-bottom: 20px;
    transition: background 200ms;
}

.form .item .name {
    margin-right: 13px;
    letter-spacing: 1px;
}

.form .item input[type=text], .form .item input[type=password] {
    all: unset;
    padding: 2px 5px;
    width: 170px;
    --color: 225;
    border-bottom: 2px rgb(var(--color), var(--color), var(--color)) solid;
    transition: border 200ms;
}
.form .item input[type=text]:hover, .form .item input[type=password]:focus {
    --color: 200;
}

.form .item input.password {
    -webkit-text-security: disc;
    color: rgb(46, 46, 46);
    letter-spacing: 3px;
    font-size: 14px;
}

.form .button {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
}

.form button {
    padding: 6px 22px;
    margin: 0 5px;
    letter-spacing: 3px;
}

.form .submit {
    --color: rgb(26, 157, 233);
}
.form .go-home {
    --color: rgb(16, 194, 179);
}


@media screen and (min-width: 800px) {
    .login {
        width: min(850px, 80vw);
        height: 400px;
        flex-direction: row;
    }

    .left .img {
        height: 100%;
        flex-direction: row;
    }

    .left img {
        height: 100%;
    }

    .right {
        width: 340px;
    }
}

@media screen and (max-width: 800px) and (min-width: 500px) {
    .login {
        width: min(850px, 80vw);
        height: 400px;
        flex-direction: row;
    }

    .left .img {
        height: 100%;
        width: 100%;
        flex-direction: row;
        align-items: center;
    }

    .left img {
        /* height: 100%; */
        width: 100%;
    }

    .right {
        width: 340px;
    }
}

@media screen and (max-width: 500px) {
    .login {
        width: 80vw;
        flex-direction: column;
    }

    .left {
        display: none;
    }

    .right  {
        width: 100%;
    }
}
</style>


<template>
    <div class="background"></div>
    <div class="main">
        <div class="login">
            <div class="left">
                <div class="img">
                    <img src="~/assets/img/login/07.png" alt="">
                </div>
            </div>
            <div class="right form">

                <h1>{{ name }} Panel</h1>
                <div class="item">
                    <span class="name">账号</span>
                    <input class="value" type="text" v-model="account">
                </div>
                <div class="item">
                    <span class="name" autocomplete="off">密码</span>
                    <input class="value password" type="text" v-model="password">
                </div>
                <div class="button">
                    <button class="submit" @click="submit()">登录</button>
                    <button class="go-home hollowed" @click="go_home()">返回</button>
                </div>

            </div>
        </div>
        <Notice ref="notice" />
    </div>
</template>


<script setup>
definePageMeta({
    layout: false,
});

import sha256 from "js-sha256"
const notice=ref(null)

const { data, pending, error, refresh } = await useFetch('/api/meta/title')
const name = data.value.data.name

const account = ref("")
const password = ref("")

async function submit() {

    if ( account.value.trim() == '' || password.value.trim() == '' ) {
        notice.value.add('failed', '登陆失败', '账号或密码未填写，请填写')
        return
    }

    const body = {
        account: account.value.trim(),
        password: sha256(password.value.trim())
    }
    const { data, pending, error, refresh } = await useFetch('/api/auth/login', {
        method: "POST",
        body: body
    })

    if (data.value.state == true) {
        // 设置token
        const token = data.value.data.token
        const cookie = useCookie('token', {path: "/"})
        cookie.value = token
        // 重定向
        notice.value.add('success', '登录成功', '即将跳转', 1)
        const url = useRoute().query.url || ''
        setTimeout(()=>{
            useRouter().push('/panel/'+url)
        }, 1000)
    }
    if (data.value.state == false) {
        notice.value.add('failed', '登录失败', '账号或密码错误')
    }

}

function go_home() {
    useRouter().push('/')
}
</script>