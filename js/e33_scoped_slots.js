Vue.component("menu-list", {
  template: `
    <div>
        <ul>
            <li v-for="item in items">
                 <slot name="menu-item" :item="item">{{ item }}</slot>
                 <!--slot thing="foo" bar="buz">{{ item }}</slot-->
            </li>
        </ul>
    </div>
    `,
  methods: {},
  props: ["items"]
});

new Vue({
  el: "#app"
});
