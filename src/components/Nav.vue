<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <nav>
    <router-link to="/" name="HomePage">Students</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
.router-link-exact-active {
  color: #fff;
}

nav {
  background: #42b983;
  padding: 1em;
  width: 1550px;
  margin-top: -8px;
  margin-left: -20px;
}

nav a {
  margin: 1em;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 800;
}
</style>
