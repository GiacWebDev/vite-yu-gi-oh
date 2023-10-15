<script>
import { store } from './Data/store';
import axios from 'axios';
import CardsContainer from './components/CardsContainer.vue';
import Header from './components/Header.vue';
import FilterList from './components/partials/FilterList.vue';

export default {
  name: 'App',
  components: {
    Header,
    CardsContainer,
    FilterList
  },

  data() {
    return {
      store
    }
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: {
          archetype: store.archetypeSelected,
        }
      })
        .then( res =>{
          store.cardList = res.data.data;
          console.log(store.cardList);
        })
        .catch(err => {
          console.log(err);
        })
    },

    searchArchetype() {
        console.log(this.store.archetypeSelected);
        // console.log(this.archetype.getApiArchetypes());
        // this.archetype.getApiArchetypes();
        console.log(this.getApi());
        this.getApi()
        }
  },
  
  mounted(){
    this.getApi();
  }
}

</script>


<template>

  <Header />
  <filterList @search-Filter="searchArchetype()"/>
  <CardsContainer />
  
</template>


<style>

</style>