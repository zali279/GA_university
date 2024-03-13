<script>
import axios from 'axios'
export default {
  name: 'AddStudent',
  data() {
    return {
      student: { name: '', email: '' }
    }
  },
  methods: {
    handleChange(event) {
      this.student[event.target.name] = event.target.value
    },
    handleSubmit(event) {
      event.preventDefault()
      axios
        .post('http://localhost:3000/students', this.student)
        .then((response) => {
          console.log(response.data)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
      this.student = {
        name: '',
        email: ''
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>add Student form</h1>
    <form @submit="handleSubmit">
      <!-- Form inputs -->
      <label for="name">Name:</label>

      <input
        type="text"
        name="name"
        :value="student.name"
        @change="handleChange"
      />
      <label for="email">Email:</label>

      <input
        type="email"
        name="email"
        :value="student.description"
        @change="handleChange"
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
