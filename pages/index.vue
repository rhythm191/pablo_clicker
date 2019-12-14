<template>
  <div class="container">
    <h1 class="title">パブロ筋測定器</h1>
    <App></App>
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
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
}

@media screen and (max-width: 768px) {
  .container {
    justify-content: space-between;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  text-align: center;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

@media screen and (max-width: 544px) {
  .title {
    font-size: 40px;
  }
}

.links {
  padding-top: 15px;
}
</style>
