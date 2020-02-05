class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}

new Vue({
    el: "#app",
    data() {
        return {
            name: "",
            description: "",
            errors: new Errors()
        };
    },
    methods: {
        onSubmit() {
            axios
                .post("/projects", this.$data)
                .then(response => alert("Success"))
                .catch(error => this.errors.record(error.response.data.errors));
        }
    }
});
