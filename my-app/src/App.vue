<template>
  <div id="app">
    <message>Hello there!>></message>
    <message>
      <counter></counter>
    </message>
    <counter></counter>
  </div>
</template>

<script>
import Message from "./components/Message.vue";
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  components: { Message, Counter }
};
</script>

<style></style>
