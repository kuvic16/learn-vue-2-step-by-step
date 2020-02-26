<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="message" v-for="status in statuses">
          <div class="message-header">
            <p>{{ status.user.name }} said...</p>
            <!-- <p>{{ postedOn(status) }}</p> -->
            <p>{{ status.created_at | ago | capitalize}}</p>
          </div>
          <div class="message-body" v-text="status.body"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Status from "../models/Status";

export default {
  data() {
    return {
      statuses: []
    };
  },
  filters: {
    ago(date) {
      return moment(date).fromNow();
    },
    capitalize(value) {
      return value.toUpperCase();
    }
  },
  created() {
    //axios.get("/statuses").then(({ data }) => (this.statuses = data));
    //Status.all().then(({ data }) => (this.statuses = data));
    Status.all(statuses => (this.statuses = statuses));
  },
  methods: {
    postedOn(status) {
      return moment(status.created_at).fromNow();
    }
  }
  // mounted() {
  //   console.log("Component mounted.");
  // }
};
</script>
<style></style>
