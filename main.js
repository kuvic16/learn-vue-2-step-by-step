// 99db100c41dac603ac50519962ab0a159d12ea0c
window.Event = new (class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
})();

Vue.component("message", {
  props: ["title", "body"],
  template: `
    <article class="message">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
  `
});

new Vue({
  el: "#root"
});
