<style scoped>
.welcome {
    display: flex;
    flex-direction: column;
}

.welcome h1 {
    font-size: 24px;
    margin-bottom: 7px;
}

.welcome h2 {
    font-size: 18px;
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
    margin-bottom: 3px;
}

.box .description {
    font-size: 14px;
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
    <div class="box">
        <h1>我们强烈谴责日本政府将核废水排入大海的行为！</h1>
    </div>
    <div class="welcome box">
        <h1>{{ GreetingMessage }}</h1> 
        <h2>欢迎来到 {{ name }} Panel！</h2>
    </div>
    <div class="box">
        <h3 class="title">数据情况</h3>
        <p class="description">
            <!-- 目前 {{ name }} 共有{{ count.article }}篇文章，{{ count.active }}个活动，{{ count.zone }}个分区 -->
        </p>
    </div>
</template>


<script setup>
import dayjs from 'dayjs'


definePageMeta({
    layout: "panel"
})
onMounted(() => {
    inject("subtitle").value = "碗里面包！/  概览"
})




let { data: data } = await useFetch('/api/auth/token', {
    method: "POST",
    body: {
        token: useCookie("token", {path: "/"}).value
    }
})
const token = data.value.token
const { data: data1 } = await useFetch('/api/meta/title')
const name = data1.value.data.name


const greeting_messages = [
    ["=name=，凌晨好~", "=name=，还没睡嘛？"],
    [
        "=name=，早上好！", "=name=，又是新的一天呢~",
        "=name=，一日之计在于晨", "*=name=，你的决心如同太阳升起",
        "=name=，早上好！同志！", "=name=, Goodmorning, my neighbor!"
    ],
    ["=name=，中午好！", "=name=，太阳当空照！"],
    ["=name=，下午好！", "=name=，来点下午茶？"],
    ["=name=，傍晚好！", "太阳落山了吗，=name=？"],
    [
        "=name=，晚上好！", "=name=，月色真美，看看月亮吧",
        "=name=, Cause baby tonight~", "=name=，明月几时有......"
    ],
    ["=name=，新年好！", "=name=，一切都好！"],
    ["=name=，夜深而好...", "=name=，早些睡哦~", "=name=，SAY GOODNIGHT~"]
]

function get_greeting_message() {
    const time_hour = dayjs().hour()
    // const time_hour = 8
    if (time_hour >= 0 && time_hour <= 3) {
        return random_array(greeting_messages[7])
    } else if (time_hour > 3 && time_hour <= 5) {
        return random_array(greeting_messages[0])
    } else if (time_hour > 5 && time_hour <= 10) {
        return random_array(greeting_messages[1])
    } else if (time_hour > 10 && time_hour <= 13) {
        return random_array(greeting_messages[2])
    } else if (time_hour > 13 && time_hour <= 16) {
        return random_array(greeting_messages[3])
    } else if (time_hour > 16 && time_hour <= 18) {
        return random_array(greeting_messages[4])
    } else if (time_hour > 18 && time_hour <= 24) {
        return random_array(greeting_messages[5])
    } else {
        return random_array(greeting_messages[6])
    }
}

const ssr = useState("ssr", ()=>false)
const GreetingMessage = ref("")
onServerPrefetch(()=>{
    ssr.value = true
    GreetingMessage.value = get_greeting_message().replace("=name=", token.name)
})
onMounted(()=>{
    if (ssr.value == false) {
        GreetingMessage.value = get_greeting_message().replace("=name=", token.name)
    }
})
onUnmounted(()=>{
    ssr.value = false
})
</script>