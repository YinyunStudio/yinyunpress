<style scoped>
.body {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background: var(--bg-color);

    scrollbar-width: thin;
    scrollbar-color: #a6a6a6 #f4f6f9;
}
.body::-webkit-scrollbar {
    width: 5px;
    background-color: var(--bg-color);
}
.body::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 2.5px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    font-family: sans-serif;
    text-align: center;
    white-space: nowrap;
}

.err {
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 3px;
    margin-bottom: 7px;
}

.code {
    font-weight: bolder;
    letter-spacing: 5px;
    font-size: 14px;
    margin-bottom: 7px;
}

.raw {
    font-size: 10px;
}
</style>


<template>
    <div class="body">
        <PageNavbar style="position: fixed" />
        <div class="container">
            <div class="content">
                <p class="err">
                    {{ message }}
                </p>
                <p class="code">
                    {{ code }}
                </p>
                <p class="raw">
                    {{ rawMessage }}
                </p>
            </div>
        </div>
        <PageFooter />
    </div>
</template>


<script setup>
    const props = defineProps(["error"])
    const error = props.error
    const code = error.statusCode
    const rawMessage = error.message
    const message = ref("")
    if ( code == 404 ) {
        message.value = "该页面不存在"
    } else {
        message.value = "该页面出错了"
    }
</script>