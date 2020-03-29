<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Async Page</div>
          <div class="panel-body">This is async page</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Component mounted.");
    this.fire();
  },
  methods: {
    getPosts() {
      return axios.get("/posts");
    },

    async fire() {
      let { data: posts } = await this.getPosts();
      console.log(posts);
    }
  }
};
</script>
<style></style>
