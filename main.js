
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

// test
new Vue({
  el: "#root"
});
