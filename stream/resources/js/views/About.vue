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
            >hover me</span>
          </p>

          <h5>Option#2</h5>
          <p>
            Hello There, Directive -
            <span v-tooltip:top="'I am a tooltip'">hover me</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tooltip from "tooltip.js";

export default {
  mounted() {
    document.querySelectorAll("[data-tooltip]").forEach(elem => {
      new Tooltip(elem, {
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
