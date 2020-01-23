Vue.component("task-list", {
  template: `
    <div>
        <task v-for="task in tasks">{{task.task}}</task>
    </div>
    `,
  data() {
    return {
      tasks: [
        { task: "Learn, Learn & Learn", complete: true },
        { task: "Sleep", complete: false },
        { task: "Listen Music", complete: true },
        { task: "Practise", complete: false }
      ]
    };
  }
});

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
