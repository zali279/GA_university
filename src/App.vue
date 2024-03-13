<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
