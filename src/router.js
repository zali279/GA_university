import { createWebHistory, createRouter } from 'vue-router'

import About from './pages/About.vue'
import students from './pages/students.vue'
import courses from './pages/courses.vue'
import AddStudent from './pages/AddStudent.vue'
import AddCourse from './pages/AddCourse.vue'

const routes = [
  { path: '/', component: students, name: 'students' },
  {
    path: '/courses',
    component: courses,
    name: 'courses'
  },
  { path: '/about', component: About, name: 'About' },
  {
    path: '/AddStudent',
    component: AddStudent,
    name: 'AddStudent'
  },
  {
    path: '/AddCourse',
    component: AddCourse,
    name: 'AddCourse'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
