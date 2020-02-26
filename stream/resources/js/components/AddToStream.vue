<template>
  <div class="message">
    <div class="message-header">Push to the stream</div>
    <div class="message-body">
      <form @submit.prevent="onSubmit">
        <p class="control">
          <textarea class="textarea" placeholder="I have something to say..."></textarea>
        </p>
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="stylus"></style>