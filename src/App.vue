<script>
import CardsContainer from './components/CardsContainer.vue';
import Header from './components/Header.vue';
// import { store } from 'vue'
// import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    CardsContainer
  },
  // data() {
  //   return {
  //     store
  //   }
  // },
}

</script>


<template>

  <Header />
  <CardsContainer />
  
</template>


<style>

</style>