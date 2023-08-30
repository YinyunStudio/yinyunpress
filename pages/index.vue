<style scoped>
    .container {
        width: min(100%, var(--view-width));
        box-sizing: border-box;
        padding: 15px;
        margin: 0 auto;
    }

    .banner {
        width: 100%;
        height: 200px;
        border-radius: 2px;
    }

    @media screen and (max-width: 290px) {
        .banner {
        height: 170px;
        }
    }
</style>


<template>
        <div class="container">
            <Swiper class="banner" :content="show" />

            <br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br>
            <!-- <Newswiper class="banner" :content="show" /> -->
        </div>
</template>


<script setup>

    const { data, pending, error, refresh } = await useFetch('/api/show')
    const show = data.value.data
</script>


下面这些其实是小火写的

// 
// 
// 
// 
// type:   |  文章 - article
//         |  分区 - zone
//         |  活动 - activity
//         |  撤硕 - toilet
//         |  群聊 - group
//         |  视频 - video
//         
//
//         |  😅 - perspire yellow bean
// 
// 
//           
// 
// 
// 
//
// function y(x) {return 1919/x}            通电
// set:y=kx+b or y=k/x or y=ax²+bx+c or 2H₂O====H₂↑+O₂↑     Ho+Mo + XiaoMi +H====MiHoMo↓ + XiaoH↑
// set:y=kx+b or y=k/x or y=ax²+bx+c or 2H₂O====H₂↑+O₂↑     Ho₂+Mo₂+2XiaoMi+H₂====2MiHoMo+2XiaoH
// function 电解水(a) {if (a === "2H₂O") return ["H₂↑","O₂↑"]}

