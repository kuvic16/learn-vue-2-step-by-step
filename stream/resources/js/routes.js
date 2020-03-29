import VueRouter from "vue-router";

let routes = [
    {
        path: "/",
        component: require("./views/Home").default
    },
    {
        path: "/about",
        component: require("./views/About").default
    },
    {
        path: "/contact",
        component: require("./views/Contact").default
    },
    {
        path: "/counter",
        component: require("./views/Counter").default
    },
    {
        path: "/async",
        component: require("./views/Async").default
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: "is-active"
});
