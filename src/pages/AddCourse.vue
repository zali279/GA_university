<script>
import axios from 'axios'
export default {
  name: 'AddCourse',
  data() {
    return {
      course: { name: '', description: '', creditHours: null, teacher: '' }
    }
  },
  methods: {
    handleChange(event) {
      this.course[event.target.name] = event.target.value
    },
    handleSubmit(event) {
      event.preventDefault()
      axios
        .post('http://localhost:3000/courses', this.course)
        .then((response) => {
          console.log(response.data)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
      this.course = {
        name: '',
        description: '',
        creditHours: null,
        teacher: ''
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>add course form</h1>
    <form @submit="handleSubmit">
      <!-- Form inputs -->
      <label for="name">Name:</label>

      <input
        type="text"
        name="name"
        :value="course.name"
        @change="handleChange"
      />
      <label for="description">Description:</label>

      <input
        type="text"
        name="description"
        :value="course.description"
        @change="handleChange"
      />
      <label for="creditHours">Credit Hours:</label>

      <input
        type="number"
        name="creditHours"
        :value="course.creditHours"
        @change="handleChange"
      />
      <label for="teacher">Teacher:</label>

      <input
        type="text"
        name="teacher"
        :value="course.teacher"
        @change="handleChange"
      />
      <!-- Form submit button -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
