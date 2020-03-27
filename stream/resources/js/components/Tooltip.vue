<template>
    <div>
        <div ref="body" v-show="false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import PopperTooltip from "tooltip.js";

export default {
    props: {
        name: {},
        placement: { default: "top" }
    },
    mounted() {
        document
            .querySelectorAll(`[data-tooltip-name=${this.name}]`)
            .forEach(elem => {
                new PopperTooltip(elem, {
                    placement: this.placement,
                    title: this.$refs.body.innerHTML,
                    html: true
                });
            });
    }
};
</script>

<style lang="stylus"></style>
