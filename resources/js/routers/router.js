import Vue from "vue";
import VueRouter from "vue-router";
//  import pages




Vue.use(VueRouter);

const routes = [

];




let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, "$1");
function localeLang(locale) {
    if (locale === "ar") {
        return (locale = "ar");
    } else {
        return (locale = "en");
    }
}
const router = new VueRouter({
    base:
        locale.trim().length && locale != "/"
            ? "/" + localeLang(locale)
            : undefined,
            
    mode: "history",
    routes
});


export default router;
