<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">About Page</div>
                    <div class="panel-body">This is about page</div>

                    <h5>Option#1</h5>
                    <p>
                        Hello There, Normal -
                        <span
                            data-tooltip="I am a tooltip"
                            data-tooltip-placement="right"
                            >hover me</span
                        >
                    </p>

                    <h5>Option#2</h5>
                    <p>
                        Hello There, Directive -
                        <span v-tooltip:top="'I am a tooltip'">hover me</span>
                    </p>

                    <h5>Option#3</h5>
                    <p>
                        Hello There, Component -
                        <span data-tooltip-name="our-products-tooltip"
                            >hover me</span
                        >
                    </p>
                    <tooltip name="our-products-tooltip" placement="left">
                        <div class="p-4 w-64">
                            <h1>Our Products</h1>
                            <p>
                                This is our first product. You can buy.
                            </p>
                        </div>
                    </tooltip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PopperTooltip from "tooltip.js";
import Tooltip from "../components/Tooltip.vue";

export default {
    components: { Tooltip },
    mounted() {
        document.querySelectorAll("[data-tooltip]").forEach(elem => {
            new PopperTooltip(elem, {
                placement: elem.dataset.tooltipPlacement || "top",
                title: elem.dataset.tooltip
            });
        });
    }
};
</script>
<style>
.tooltip {
    background: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
</style>
