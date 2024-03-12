export const StudentService = {
  getStudentsData() {
    return [
      {
        id: '1001',
        studentId: '20152109',
        studentName: 'Sara Johnson',
        image: 'sara.jpg',
        GPA: 3.5,
        major: 'Biology',
        ranking: 2,
        status: 'Active'
      },
      {
        id: '1002',
        studentId: '20152110',
        studentName: 'Michael Brown',
        image: 'michael.jpg',
        GPA: 3.2,
        major: 'History',
        ranking: 3,
        status: 'Active'
      },
      {
        id: '1003',
        studentId: '20152111',
        studentName: 'Emily Wilson',
        image: 'emily.jpg',
        GPA: 3.8,
        major: 'English',
        ranking: 4,
        status: 'Active'
      },
      {
        id: '1004',
        studentId: '20152112',
        studentName: 'Jacob Martinez',
        image: 'jacob.jpg',
        GPA: 3.6,
        major: 'Mathematics',
        ranking: 5,
        status: 'Active'
      },
      {
        id: '1005',
        studentId: '20152113',
        studentName: 'Olivia Rodriguez',
        image: 'olivia.jpg',
        GPA: 3.9,
        major: 'Chemistry',
        ranking: 6,
        status: 'Active'
      },
      {
        id: '1006',
        studentId: '20152114',
        studentName: 'William Lee',
        image: 'william.jpg',
        GPA: 3.3,
        major: 'Physics',
        ranking: 7,
        status: 'Active'
      },
      {
        id: '1007',
        studentId: '20152115',
        studentName: 'Sophia Nguyen',
        image: 'sophia.jpg',
        GPA: 3.7,
        major: 'Computer Science',
        ranking: 8,
        status: 'Active'
      },
      {
        id: '1008',
        studentId: '20152116',
        studentName: 'Ethan Garcia',
        image: 'ethan.jpg',
        GPA: 3.4,
        major: 'Psychology',
        ranking: 9,
        status: 'Active'
      },
      {
        id: '1009',
        studentId: '20152117',
        studentName: 'Isabella Martinez',
        image: 'isabella.jpg',
        GPA: 3.1,
        major: 'Sociology',
        ranking: 10,
        status: 'Active'
      },
      {
        id: '1010',
        studentId: '20152118',
        studentName: 'James Smith',
        image: 'james.jpg',
        GPA: 3.0,
        major: 'Economics',
        ranking: 11,
        status: 'Active'
      }
    ]
  },

  getStudentClassesData() {
    return [
      {
        className: 'Biology 101',
        classCode: 'BIO101',
        classInstructor: 'Dr. Smith',
        studentScore: 90,
        currentStatus: 'Enrolled'
      },
      {
        className: 'History of Europe',
        classCode: 'HIST201',
        classInstructor: 'Dr. Johnson',
        studentScore: 85,
        currentStatus: 'Enrolled'
      },
      {
        className: 'American Literature',
        classCode: 'LIT301',
        classInstructor: 'Dr. Brown',
        studentScore: 95,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Mathematics for Engineers',
        classCode: 'MATH201',
        classInstructor: 'Dr. Lee',
        studentScore: 88,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Chemical Reactions',
        classCode: 'CHEM301',
        classInstructor: 'Dr. Rodriguez',
        studentScore: 92,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Quantum Mechanics',
        classCode: 'PHYS401',
        classInstructor: 'Dr. Nguyen',
        studentScore: 86,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Data Structures and Algorithms',
        classCode: 'CS301',
        classInstructor: 'Dr. Garcia',
        studentScore: 91,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Cognitive Psychology',
        classCode: 'PSYCH301',
        classInstructor: 'Dr. Martinez',
        studentScore: 84,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Social Movements',
        classCode: 'SOC301',
        classInstructor: 'Dr. Wilson',
        studentScore: 89,
        currentStatus: 'Enrolled'
      },
      {
        className: 'Macroeconomics',
        classCode: 'ECON301',
        classInstructor: 'Dr. Smith',
        studentScore: 83,
        currentStatus: 'Enrolled'
      }
    ]
  },

  getStudentsMini() {
    return Promise.resolve(this.getStudentsData().slice(0, 5))
  },

  getStudentsSmall() {
    return Promise.resolve(this.getStudentsData().slice(0, 10))
  },

  getStudents() {
    return Promise.resolve(this.getStudentsData())
  },

  getStudentClassesSmall() {
    return Promise.resolve(this.getStudentClassesData().slice(0, 10))
  },

  getStudentClasses() {
    return Promise.resolve(this.getStudentClassesData())
  }
}
