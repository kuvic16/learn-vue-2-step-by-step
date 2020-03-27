import Vue from "vue";
import axios from "axios";
import Form from "./core/Form.js";
// import Example from "./components/Example";
import Carousel from "./components/Carousel";

window.axios = axios;
window.Form = Form;

new Vue({
    el: "#app",
    components: {
        Carousel
    },
    data() {},
    methods: {}
});
