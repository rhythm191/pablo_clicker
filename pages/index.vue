<template>
  <div class="container">
    <div>
      <h1 class="title">
        frame_clicker
      </h1>
      <div>
        <App></App>
      </div>
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'

export default {
  components: {
    App
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
