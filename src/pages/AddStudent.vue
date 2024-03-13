<template>
  <div class="register-container">
    <video class="background-video" autoplay loop muted>
      <source src="/Welcome to Cambridge!.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="left">
      <div class="header">
        <h2 class="animation a1">Add Student</h2>
        <h4 class="animation a2">Enter student details below:</h4>
      </div>
      <form class="register-form" @submit="handleSubmit">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          v-model="student.name"
          class="form-control"
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          v-model="student.email"
          class="form-control"
          required
        />
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="!student.name || !student.email"
        >
          Add Student
        </button>
      </form>
    </div>
  </div>
</template>

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
    async handleSubmit(event) {
      event.preventDefault()
      try {
        const response = await axios.post(
          'http://localhost:3000/students',
          this.student
        )
        console.log(response.data)
        this.student = { name: '', email: '' }
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
}

.left {
  flex: 1;
  padding: 0 20px;
}

.background-video {
  flex: 1;
  object-fit: fill;
  height: 100vh;
  width: 50%;
  filter: brightness(0.5);
}
.register-form {
  background-color: white;
  padding: 11%;
  max-width: 90%;
}

.register-form input {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  margin-bottom: 15px;
}

.register-form input:focus {
  border-color: #333;
}

.register-form h2 {
  color: #42b983;
  font-size: large;
  font-weight: bolder;
}

.register-form h4 {
  color: rgba(0, 0, 0, 0.4);
  font-size: small;
  padding-bottom: 2%;
}

.register-form button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.register-form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.register-form button:hover {
  background-color: #42b983;
}

.animation {
  animation-name: move;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.animation-a1 {
  animation-delay: 2s;
}

.animination-a2 {
  animation-delay: 2.1s;
}

.header > h2 {
  margin: 0;
  color: #17a34a;
  margin-left: 5%;
  font-weight: bolder;
  font-size: xx-large;
  margin-left: 10%;
}

.header > h4 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 10%;
}
</style>
