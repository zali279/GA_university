<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <nav>
    <router-link to="/about">About</router-link>

    <router-link to="/" name="HomePage">Students</router-link>
    <router-link to="/courses">Courses</router-link>
  </nav>
</template>

<style>
.router-link-exact-active {
  color: #fff;
}

nav {
  background: #42b983;
  padding: 1em;
  width: 100%;
  font-weight: bolder;
}

nav a {
  margin: 1em;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 800;
}
</style>
