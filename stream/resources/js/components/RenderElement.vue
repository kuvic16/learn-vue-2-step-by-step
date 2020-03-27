<script>
export default {
    data() {
        return { name: "John Doe" };
    },
    render(element) {
        return element("div", { attrs: { id: "foobar", class: "one two" } }, [
            element("h1", this.name),
            element("h2", this.name)
        ]);
    }
};
</script>
