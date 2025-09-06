import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { VueFire, VueFireAuth } from 'vuefire';
import App from './App.vue';
import router from './routes.js';
import './index.css'
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAG8m8CuavFjCBV4_NJ26mQoo2teuEuWEM",
  authDomain: "project-atlas-6bbad.firebaseapp.com",
  projectId: "project-atlas-6bbad",
  storageBucket: "project-atlas-6bbad.appspot.com",
  messagingSenderId: "761708476353",
  appId: "1:761708476353:web:f9db534dc85bf0b96c6140",
  measurementId: "G-GFXJ64ESE5"
});

export const auth = getAuth(firebaseApp);

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.use(router);

app.mount('#app');
