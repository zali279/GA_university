<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: { Nav }
}
</script>

<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<style scoped></style>
