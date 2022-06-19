import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyAlDHQwvrPW5lliC3YwnU9t3t82_5qvQ74",
//   authDomain: "pwlfinal71190467.firebaseapp.com",
//   projectId: "pwlfinal71190467",
//   storageBucket: "pwlfinal71190467.appspot.com",
//   messagingSenderId: "628489921818",
//   appId: "1:628489921818:web:2aa4166f41da8a977c38a3"
// };
// firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
