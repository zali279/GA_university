<script>
import Client from '../../.vscode/services/api'
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
      console.log(this.courses)
    },
    deleteCourse(courseId) {
      Client.delete(`/courses/${courseId}`)
        .then(() => {
          this.getcourses()
          this.$toast.add({
            severity: 'success',
            summary: 'Course Deleted!',
            life: 3000
          })
        })
        .catch((error) => {
          console.error('Error removing course:', error)
        })
    }
  }
}
</script>

<template>
  <div class="listings">
    <Card
      style="width: 25rem; overflow: hidden"
      class="card"
      v-for="course in courses"
    >
      <template #header>
        <img
          alt="user header"
          src="https://thesavvyimg.co.uk/wp-content/uploads/2022/08/the-savvy-img-online-courses-masterclass-shortcut-plab-gmc-registration.png"
        />
      </template>
      <template #title>{{ course.name }}</template>
      <template #subtitle
        >Teacher: {{ course.teacher }} <br />
        Credit Hours:{{ course.creditHours }}</template
      >
      <template #content>
        <p class="m-0">
          {{ course.description }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button
            label="More Details"
            severity="secondary"
            outlined
            class="w-full"
          />
          <Button
            label="Delete Course"
            class="w-full"
            @Click="deleteCourse(course._id)"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.listings {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18em);
  grid-gap: 10em;
  justify-content: start;
}
.card {
  width: 100%;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  background: #fff;
  box-shadow: 4px 4px 14px 0px rgba(50, 50, 50, 0.39);
  padding: 0.5em 1em;
}
</style>
