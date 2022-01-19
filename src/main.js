import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:58b13e27a12a57ae9f6321",
    measurementId: "G-YY9NKJCJBT"
}

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')