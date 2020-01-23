Vue.component("task", {
  template: `<li><slot></slot></li>`,
  data() {
    return {
      message: ""
    };
  }
});

new Vue({
  el: "#root"
});
