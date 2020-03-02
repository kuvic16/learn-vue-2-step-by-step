export default {
  // template: "<div><h1>{{message | capitalize}}</h1></div>",
  template: "<div><h1>{{notification}}</h1></div>",
  props: ["message"],
  filters: {
    capitalize(message) {
      return message.toUpperCase();
    }
  },
  computed: {
    notification() {
      return this.message.toUpperCase();
    }
  }
  // data() {
  //   return {
  //     message: "Hello World"
  //   };
  // }
};
