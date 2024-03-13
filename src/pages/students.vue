<script>
import Client from '../../.vscode/services/api'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
export default {
  name: 'students',
  components: {
    Dropdown,
    Dialog
  },
  data() {
    return {
      students: null,
      expandedRows: {},
      grades: ['A', 'B', 'C', 'D', 'F'],
      allCourses: [],
      showAddCourseDialog: false,
      newCourseData: {
        courseId: null,
        gradeLetter: null,
        studentId: null
      }
    }
  },
  mounted() {
    this.fetchStudents()
    this.fetchCourses()
  },
  methods: {
    fetchStudents() {
      Client.get('/students')
        .then((response) => {
          this.students = response.data
        })
        .catch((error) => {
          console.error('Error fetching students:', error)
        })
    },
    fetchCourses() {
      Client.get('/courses')
        .then((response) => {
          this.allCourses = response.data
        })
        .catch((error) => {
          console.error('Error fetching courses:', error)
        })
    },
    onRowExpand(event) {
      this.$toast.add({
        severity: 'info',
        summary: 'Student Expanded',
        detail: event.data.name,
        life: 3000
      })
    },
    onRowCollapse(event) {
      this.$toast.add({
        severity: 'success',
        summary: 'Student Collapsed',
        detail: event.data.name,
        life: 3000
      })
    },
    expandAll() {
      this.students.forEach((student) => {
        this.$set(this.expandedRows, student._id, true)
      })
    },
    collapseAll() {
      this.expandedRows = {}
    },
    deleteStudent(studentId) {
      Client.delete(`/students/${studentId}`)
        .then(() => {
          this.fetchStudents()
          this.$toast.add({
            severity: 'success',
            summary: 'Student deleted!',
            life: 3000
          })
        })
        .catch((error) => {
          console.error('Error deleting student:', error)
        })
    },
    removeCourse(studentId, courseId) {
      Client.delete(`/students/${studentId}/scores/${courseId}`)
        .then(() => {
          this.fetchStudents()
          this.$toast.add({
            severity: 'success',
            summary: 'Course removed!',
            life: 3000
          })
        })
        .catch((error) => {
          console.error('Error removing course:', error)
        })
    },
    updateGrade(studentId, scoreId, newGrade) {
      Client.put(`/students/${studentId}/scores/${scoreId}`, {
        letter: newGrade
      })
        .then(() => {
          this.fetchStudents()
          this.$toast.add({
            severity: 'success',
            summary: 'Course Grade Updated!',
            life: 3000
          })
        })
        .catch((error) => {
          console.error('Error updating grade:', error)
        })
    },
    addCourse(studentId, selectedCourse) {
      if (!selectedCourse) return
      this.newCourseData.courseId = selectedCourse.id || selectedCourse._id
      this.newCourseData.studentId = studentId
      this.showAddCourseDialog = true
    },
    selectGrade(grade) {
      this.newCourseData.gradeLetter = grade
    },

    submitAddCourse() {
      if (!this.grades.includes(this.newCourseData.gradeLetter)) {
        this.$toast.add({
          severity: 'warn',
          summary: 'Invalid Grade',
          detail: 'Please select a valid grade.',
          life: 3000
        })
        return
      }
      const score = this.convertGradeToScore(this.newCourseData.gradeLetter)

      Client.post(`/students/${this.newCourseData.studentId}/courses`, {
        courseId: this.newCourseData.courseId,
        grade: this.newCourseData.gradeLetter,
        score
      })
        .then(() => {
          this.fetchStudents()
          this.showAddCourseDialog = false
          this.$toast.add({
            severity: 'success',
            summary: 'Course Added!',
            life: 3000
          })
        })
        .catch((error) => {
          console.error('Error adding course:', error)
        })
    },

    convertGradeToScore(grade) {
      const gradeValues = { A: 4, B: 3, C: 2, D: 1, F: 0 }
      return gradeValues[grade]
    },

    availableCourses(studentId) {
      const student = this.students.find((s) => s._id === studentId)
      if (!student || !student.scores) return []

      const enrolledCourseIds = student.scores
        .map((score) => score.course && score.course._id)
        .filter((id) => !!id)

      return this.allCourses.filter(
        (course) => !enrolledCourseIds.includes(course._id)
      )
    }
  }
}
</script>

<template>
  <h1>Students</h1>
  <div class="card">
    <DataTable
      v-model:expandedRows="expandedRows"
      :value="students"
      dataKey="_id"
      @rowExpand="onRowExpand"
      @rowCollapse="onRowCollapse"
      tableStyle="min-width: 60rem"
    >
      <template #header>
        <div class="flex flex-wrap justify-content-end gap-2">
          <Button
            text
            icon="pi pi-plus"
            label="Expand All"
            @click="expandAll"
          />
          <Button
            text
            icon="pi pi-minus"
            label="Collapse All"
            @click="collapseAll"
          />
        </div>
      </template>
      <Column expander style="width: 5rem" />
      <Column field="_id" header="Student ID" />
      <Column field="name" header="Name" />
      <Column field="gpa" header="GPA" />
      <Column>
        <template #body="slotProps">
          <Button
            icon="pi pi-times"
            @click="deleteStudent(slotProps.data._id)"
          />
        </template>
      </Column>
      <template #expansion="slotProps">
        <div class="p-3">
          <h5>Courses of {{ slotProps.data.name }}</h5>
          <DataTable :value="slotProps.data.scores">
            <Column field="course.name" header="Course Name" sortable />
            <Column field="letter" header="Grade" sortable />
            <Column header="Actions">
              <template #body="courseSlotProps">
                <Dropdown
                  v-model="courseSlotProps.data.letter"
                  :options="grades"
                  placeholder="Select a grade"
                  @change="
                    () =>
                      updateGrade(
                        slotProps.data._id,
                        courseSlotProps.data._id,
                        courseSlotProps.data.letter
                      )
                  "
                />
                <Button
                  icon="pi pi-times"
                  class="p-ml-2"
                  @click="
                    () =>
                      removeCourse(slotProps.data._id, courseSlotProps.data._id)
                  "
                />
              </template>
            </Column>
          </DataTable>
          <Dropdown
            v-model="slotProps.data.newCourse"
            :options="availableCourses(slotProps.data._id)"
            optionLabel="name"
            placeholder="Add course"
            @change="
              () => addCourse(slotProps.data._id, slotProps.data.newCourse)
            "
          />
        </div>
      </template>
    </DataTable>
    <Toast />

    <!-- Add Course Dialog -->
    <Dialog
      v-model:visible="showAddCourseDialog"
      modal="true"
      header="Add New Course"
      :closable="true"
      :style="{ width: '30vw' }"
    >
      <div>
        <label for="grade">Grade:</label>
        <Dropdown
          v-model="newCourseData.gradeLetter"
          :options="grades"
          placeholder="Select a grade"
        />
      </div>
      <Button label="Submit" @click="submitAddCourse()" />
    </Dialog>
  </div>
</template>
