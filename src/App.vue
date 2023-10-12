<script>
import { store } from './Data/store';
import axios from 'axios';
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

  data() {
    return {
      store
    }
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl)
        .then( res =>{
          store.cardList = res.data.data;
          console.log(store.cardList);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

</script>


<template>

  <Header />
  <CardsContainer />
  
</template>


<style>

</style>