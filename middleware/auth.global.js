export default defineNuxtRouteMiddleware( async (to, from) => { if( to.fullPath.split('/')[1] === 'panel' ){
    let backurl
    if (to.fullPath == '/panel' || to.fullPath == '/panel/') {
        backurl = '/login'
    } else {
        backurl = "/login?url="+to.fullPath.slice(7)
    }


    const { value: token } = useCookie('token')
    if (token === undefined) {
        return navigateTo(backurl)
    }
    const body = {
        token: token
    }
    const { data, pending, error, refresh } = await useFetch('/api/auth/token', {
        method: "POST",
        body: body
    })
    const state = data.value.state
    if (!state) {
        return navigateTo(backurl)
    } else {
        return
    }
}})