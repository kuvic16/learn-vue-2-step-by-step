new Vue({
    el: "#app",
    data() {
        return {
            name: "",
            description: ""
        };
    },
    methods: {
        onSubmit() {
            axios.post("/projects", this.$data);
        }
    }
});
