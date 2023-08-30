<style scoped>
.swiper {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    
    user-select:none;    
    -ms-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;

    --light-color: rgb(245, 245, 245);
    --dark-color: var(--font-color);
}


.trigger {
    --size: 4.5px;
    --activity-size: 27px;
    --color: rgba(79, 79, 79, 0.3);
    --activity-color: rgba(79, 79, 79, 0.4);
    
    --gap: 3px;
    --time: 700ms;
    --padding: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--padding) 0;
    transition: transform var(--time);
}

.trigger:hover {
    --color: rgba(79, 79, 79, 0.5);
    --activity-color: rgba(79, 79, 79, 0.5);
}

.trigger span {
    display: block;
    background: var(--color);
    margin: 0 var(--gap);
    width: var(--size);
    height: var(--size);
    border-radius: calc(var(--size) / 2);
    transition: all var(--time);
}

.trigger span:not(.activity):hover {
    transform: scale(1.5);
}

.trigger span.activity {
    background: var(--activity-color);
    width: var(--activity-size);
}

.trigger div {
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    background-image: url(~/assets/icon/arrow.png);
    background-color: rgba(0, 0, 0, 0.25);
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 15px;
    border-radius: 50%;
    transform: scale(0.7) rotate(var(--rotate));
    opacity: 0;
    transition: transform 300ms, opacity 200ms;
}

.trigger:hover div {
    opacity: 1;
    transform: scale(1) rotate(var(--rotate));
}

.trigger div.prev {
    --rotate: 90deg;
}

.trigger div.next {
    --rotate: -90deg;
}

.trigger * {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.trigger:hover * {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
}



.items {
    height: 100%;
    transition: transform 700ms;
}

.items.transition {
    transition-duration: 0ms;
    /* opacity: 0; */
}

.item {
    position: relative;
    white-space: normal;
    /* 子元素居中 */
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    /* 自身对齐 */
    vertical-align: top;
    width: 100%;
    height: 100%;
    /* 背景居中 */
    background-position: center;
    background-size: cover;
}

.item.dark {
    color: var(--dark-color);
}

.item.light {
    color: var(--light-color);
}

.gradient {
    --opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255,  calc( var(--opacity) / 6 )) 65%, rgba(255, 255, 255, calc( var(--opacity) / 2 ) ) 80%, rgba(255, 255, 255, var(--opacity))100%);
    z-index: 1;
}

.container {
    width: 80%;
    margin: 0 auto 0 auto;
    z-index: 2;
    font-family: sans-serif;
}


.dot { /* 分隔符号 */
    font-size: 0.5em;
    margin: 0 0.5em;
}

/* 文章 - article */
@media screen and (min-width: 800px) {
    .article .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .article .main {
        flex: 7;
        margin-right: 8px;
    }

    .article .title {
        font-size: 24px;
        margin-bottom: 5px;
    }

    .article .box {
        font-size: 14px;
    }

    .article .description {
        font-size: 10px;
        flex: 4;
    }
}

@media screen and (max-width: 800px) {
    .article .title {
        font-size: 20px;
        margin-bottom: 4px;
    }

    .article .description {
        display: none;
    }

    .article .box {
        font-size: 12px;
    }
}

/* 分区 - zone */
.zone .box {
    display: inline-block;
}

@media screen and (min-width: 800px) {
    .zone .title {
        font-size: 24px;
        margin-bottom: 5px;
    }

    .zone .box {
        margin-left: 8px;
        font-size: 14px;
    }

    .zone .description {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    .zone .title {
        font-size: 24px;
        margin-bottom: 4px;
        overflow: hidden;
        white-space: nowrap;
    }

    .zone .box {
        font-size: 12px;
        margin-left: 6px;
    }

    .zone .description {
        font-size: 12px;
    }
}

/* 活动 - activity */
.activity .box {
    display: inline-block;
}

.activity .timeline::before {
    background: rgba(255, 255, 255, 0.5);
}

.activity .before::before {
    background: rgb(128, 195, 56, 0.9);
}

.activity .doing::before {
    background: rgba(195, 186, 56, 0.9);
}

.activity .after::before {
    background: rgba(185, 185, 185, 0.9);
}

@media screen and (min-width: 800px) {
    .activity .title {
        font: 24px;
        margin-bottom: 5px;
    }

    .activity .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .activity .box {
        margin-left: 8px;
        font-size: 14px;
    }

    .activity .main {
        flex: 14;
        margin-right: 15px;
    }

    .activity .timeline {
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
    }

    .activity .timeline::before {
        content: "";
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 5px;
        transform: translateX(-50%);
        width: 1px;
        border-radius: 0.5px;
    }

    .activity .event {
        position: relative;
        left: 20px;
        font-size: 12px;
        line-height: 20px;
    }

    .activity .event::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translate(50%, -50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        z-index: 1;
    }

    .activity .doing::after {
        content: "";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -26px;
        width: 200%;
        border-radius: 15px 0 0 15px;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: -1;
    }
}

@media screen and (max-width: 800px) {
    .activity .description {
        display: none;
    }

    .activity .container {
        display: flex;
        flex-direction: column;
    }

    .activity .title {
        font-size: 24px;
        margin-bottom: 15px;
        overflow: hidden;
        white-space: nowrap;
    }

    .activity .box {
        font-size: 12px;
        margin-left: 6px;
    }

    .activity .timeline {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        position: relative;
    }

    .activity .timeline::before {
        content: "";
        position: absolute;
        left: 8px;
        right: 8px;
        top: 5px;
        transform: translateY(-50%);
        height: 1px;
        border-radius: 0.5px;
    }

    .activity .doing::after {
        content: "";
        position: absolute;
        left: -4px;
        right: -4px;
        top: -26px;
        height: 200%;
        border-radius: 15px 15px 0 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 30%);
        z-index: -1;
    }

    .activity .event {
        width: 1em;
        position: relative;
        top: 20px;
    }

    .activity .event::before {
        content: "";
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translate(-50%, 50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        z-index: 1;
    }
}

</style>


<template>
    <div class="swiper">
        <div class="items"
        :class="{transition: transition}"
        :style="`transform: translateX(${ ( swiper_index ) * -100 }%);`"
        @touchstart="touchstart"
        @touchend="touchend"
        @mousedown="mousedown"
        @mouseup="mouseup">

            <div
            v-for="item in content"
            class="item"
            :class="item.type, item.color"
            :style="`background-image: url(${item.background})`">

                <div
                v-if="item.type=='article'"
                class="container">
                    <div class="main">
                        <h1 class="title">{{ item.title }}</h1>
                        <div class="box">
                            <span class="author">{{ item.article.author }}</span>
                            <span class="dot">·</span>
                            <span class="time">{{ dayjs.unix(item.article.time).format("YYYY年M月D日")  }}</span>
                        </div>
                    </div>
                    <p class="description">{{ item.description }}</p>
                </div>

                <div
                v-if="item.type=='zone'"
                class="container">
                    <h1 class="title">{{ item.title }}<div class="box">
                            <span class="article_count">{{ item.zone.article_count }}篇文章</span>
                            <span class="dot">·</span>
                            <span class="activity_count">{{ item.zone.activity_count }}个活动</span>
                        </div>
                    </h1>
                    <p class="description">{{ item.description }}</p>
                </div>

                <div
                v-if="item.type=='activity'"
                class="container">
                    <div class="main">
                        <h1 class="title">{{ item.title }}<div class="box">
                                <span class="time">{{ dayjs.unix(item.activity.time).format("YYYY年M月") }}</span>
                                <span class="dot">·</span>
                                <span class="state">{{ item.activity.state }}</span>
                            </div>
                        </h1>
                        <p class="description">{{ item.description }}</p>
                    </div>
                    <div class="timeline">
                        <p
                        v-for="(event, index) in item.activity.schedule[1]"
                        class="event"
                        :class="{
                                before: index<item.activity.schedule[0],
                                doing: index==item.activity.schedule[0],
                                after: index>item.activity.schedule[0]}
                        ">{{ event }}</p>
                    </div>
                </div>

                <div class="gradient"></div>
            </div>
        </div>

        <div class="trigger">
            <div @click="prev()" class="prev" title="上一页"></div>
            <span
                v-for="(_,index) in swiper_count"
                :class="{activity: index == swiper_index}"
                @click="set(index)"
            ></span>
            <!--  || (index == 1 && swiper_index == swiper_count+1 ) || (index == swiper_count && swiper_index == 0) -->
            <div @click="next()" class="next" title="下一页"></div>
        </div>
        <!-- <Teleport to="body">index:{{ swiper_index }}, count:{{ swiper_count }}, size:{{ swiper_size }}</Teleport> -->
    </div>
</template>


<script setup>
import dayjs from 'dayjs'
import { time } from 'echarts';

const props = defineProps(["content"])
let content = JSON.parse(JSON.stringify(props.content))
// content.unshift(content.at(-1))
// content.push(content.at(1))
// content = ref(content)

const swiper_index = ref( 0 )
const swiper_count = content.length
// const swiper_count = swiper_size - 2

// const transition = ref(true)
// const swiper_size = computed(() => {
//   return content.value.length
// })

let direction = 1 // 1:toLeft / 2:toRight
let Interval = 5500

// function change(num) {
    // swiper_index.value+=num

    // let a = document.querySelector(".items")

    // if ( swiper_index.value < 1 || swiper_index.value > swiper_count ) {
    //     setTimeout(() => {
    //         transition.value = false
    //         // getComputedStyle(a).length;

    //     setTimeout(()=>{
    //         back()
                
    //     setTimeout(() => {
    //         transition.value = true
    //         // getComputedStyle(a).length;

    //     }, 1)
    //     }, 1)
    //     }, 700)

        

    //     // transition.value = true
    //     getComputedStyle(a).length;
    //     // back()
    //     // transition.value = false
    // }
    // forceBack()
// }

function set(num) {
    swiper_index.value=num
}

function back() {
    let tmp = swiper_index.value
    if ( tmp < 0 ) swiper_index.value = swiper_count - 1
    if ( tmp > swiper_count - 1 ) swiper_index.value = 0
}
function play() {
    if ( direction == 1 ) swiper_index.value += 1
    if ( direction == 2 ) swiper_index.value -= 1
    back()
}

let start_pos
function mousedown(e) {
    start_pos = [e.screenX, e.screenY]
}
function mouseup(e) {
    slide([e.screenX, e.screenY])
}
function touchstart(e) {
    start_pos = [e.touches[0].clientX, e.touches[0].clientY]
}
function touchend(e) {
    slide([e.changedTouches[0].clientX, e.changedTouches[0].clientY])
}
function slide(pos) {
    if ( start_pos[0] > pos[0] ) {
        next()
    } else if ( start_pos[0] < pos[0] ) {
        prev()
    }
}

function prev() {
    swiper_index.value -= 1
    back()
    direction = 2
    clearInterval( timer.timer )
    timer.timer = setInterval(() => {play()}, Interval)
}

function next() {
    swiper_index.value += 1
    back()
    direction = 1
    clearInterval( timer.timer )
    timer.timer = setInterval(() => {play()}, Interval)
}

const timer = {}

onMounted(() => {
    timer.timer = setInterval(() => {play()}, Interval)
})


// const data = ref(null)

// onServerPrefetch(async () => {
//   // 组件作为初始请求的一部分被渲染
//   // 在服务器上预抓取数据，因为它比在客户端上更快。
//   data.value = await fetchOnServer(/* ... */)
// })

// onMounted(async () => {
//   if (!data.value) {
//     // 如果数据在挂载时为空值，这意味着该组件
//     // 是在客户端动态渲染的。将转而执行
//     // 另一个客户端侧的抓取请求
//     data.value = await fetchOnClient(/* ... */)
//   }
// })
</script>