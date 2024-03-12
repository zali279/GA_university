import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Card from 'primevue/card' // Import the Card component

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Button', Button)
app.component('Rating', Rating)
app.component('Tag', Tag)
app.component('Toast', Toast)
app.component('Card', Card) // Register the Card component

app.mount('#app')
