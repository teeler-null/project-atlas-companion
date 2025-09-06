<script>

// eslint-disable-next-line
import { getAuth} from "firebase/auth";
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  components: {
    'navbar': NavbarComponent,
  },
  setup() {
    
    //const auth = getAuth();

  }
}
</script>
<!-- Tyler Feature -->
<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
<!-- End of Feature -->

<style>
</style>
