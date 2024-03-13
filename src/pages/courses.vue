<script>
import axios from 'axios'
export default {
  name: 'courses',
  data: () => ({
    courses: []
  }),
  mounted() {
    this.getcourses()
  },
  methods: {
    async getcourses() {
      const response = await axios.get('http://localhost:3000/courses')
      this.courses = response.data
    }
  }
}
</script>

<template><h1>all courses</h1></template>
