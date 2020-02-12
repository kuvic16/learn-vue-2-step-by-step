Vue.component("coupon", {
    props: ["code"],
    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)">
    `,
    methods: {
        updateCode(code) {
            //validation
            if (code === "ALLFREE") {
                alert("This coupon is free");
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
