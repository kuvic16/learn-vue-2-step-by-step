import Vue from "vue";
import axios from "axios";
import Form from "./core/Form.js";
import Example from "./components/Example";

window.axios = axios;
window.Form = Form;

new Vue({
    el: "#app",
    components: {
        Example
    },
    data() {
        return {
            form: new Form({
                name: "",
                description: ""
            })
        };
    },
    methods: {
        onSubmit() {
            this.form
                .submit("post", "/projects")
                .then(data => console.log(data))
                .catch(errors => console.log(errors));
        }
    }
});
