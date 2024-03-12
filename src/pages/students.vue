<script>
import { StudentService } from '@/service/StudentService'

export default {
  name: 'students',
  data() {
    return {
      students: null,
      expandedRows: {}
    }
  },
  mounted() {
    StudentService.getStudents().then((data) => (this.students = data))
  },
  methods: {
    onRowExpand(event) {
      this.$toast.add({
        severity: 'info',
        summary: 'Student Expanded',
        detail: event.data.studentName,
        life: 3000
      })
    },
    onRowCollapse(event) {
      this.$toast.add({
        severity: 'success',
        summary: 'Student Collapsed',
        detail: event.data.studentName,
        life: 3000
      })
    },
    expandAll() {
      this.expandedRows = this.students.reduce((acc, s) => {
        acc[s.id] = true
        return acc
      }, {})
    },
    collapseAll() {
      this.expandedRows = {}
    },
    formatCurrency(value) {
      return value.toFixed(2)
    },
    getSeverity(student) {
      if (student.GPA >= 3.5) {
        return 'success'
      } else if (student.GPA >= 3.0) {
        return 'warning'
      } else {
        return 'danger'
      }
    }
  }
}
</script>

<template>
  <h1>All Our Students</h1>
  <div class="card">
    <DataTable
      v-model:expandedRows="expandedRows"
      :value="students"
      dataKey="id"
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
      <Column field="studentId" header="Student Id"></Column>
      <Column field="studentName" header="Student Name"></Column>
      <Column field="image" header="Image">
        <template #body="slotProps">
          <img
            :src="`https://example.com/images/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="shadow-4"
            width="64"
          />
        </template>
      </Column>
      <Column field="GPA" header="GPA"></Column>
      <Column field="major" header="Major"></Column>
      <Column field="ranking" header="Ranking"></Column>
      <Column field="status" header="Status"></Column>
      <template #expansion="slotProps">
        <div class="p-3">
          <h5>Courses of {{ slotProps.data.studentName }}</h5>
          <DataTable :value="slotProps.data.courses">
            <Column field="className" header="Class Name" sortable></Column>
            <Column field="classCode" header="Class Code" sortable></Column>
            <Column
              field="classInstructor"
              header="Class Instructor"
              sortable
            ></Column>
            <Column
              field="studentScore"
              header="Student Score"
              sortable
            ></Column>
            <Column
              field="currentStatus"
              header="Current Status"
              sortable
            ></Column>
          </DataTable>
        </div>
      </template>
    </DataTable>
    <Toast />
  </div>
</template>
