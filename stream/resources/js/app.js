require("./bootstrap");
import router from "./routes";
import Tooltip from "tooltip.js";

Vue.directive("tooltip", {
    bind(elem, bindings) {
        console.log(bindings);
        new Tooltip(elem, {
            placement: bindings.arg,
            title: bindings.value
        });
    }
});

new Vue({
    el: "#app",
    router
});
