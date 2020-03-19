Vue.component("coupon", {
    props: ["code"],
    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    data() {
        return {
            invalids: ["ALLFREE", "SOMETHINGELSE"]
        };
    },
    methods: {
        updateCode(code) {
            //validation
            if (this.invalids.includes(code)) {
                alert("This coupon is free");
                this.$refs.input.value = code = "";

                return;
            }

            this.$emit("input", code);
        }
    }
});

new Vue({
    el: "#root",
    data: {
        coupon: "Freebie"
    }
});
