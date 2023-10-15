<script>
import { store } from '../Data/store'
import CharacterCard from './partials/CharacterCard.vue';
import FilterList from './partials/FilterList.vue';

export default {
  name: 'CardsContainer',
  components: {
    CharacterCard,
    FilterList
  },
  data() {
    return {
      store
    }
  },
  methods: {
        searchArcherype() {
            console.log(this.store.archetypeSelected);
            this.store.getApiArchetypes();
        }
    },
  // created() {
  //       store.getApiArchetypes();
  // },
}
</script>




<template>

  <main>
    <div class="container">

      <filterList @search-Filter="searchArcherype"/>

      <div class="row ">
        <div class="col">
          <p>Cards found: number</p>
        </div>
      </div>

      <div class="row">
        <CharacterCard 
        v-for="card in store.cardList"
        :key="card.id"
        :cardImage="card.card_images[0].image_url_small"
        :cardName="card.name"
        :cardArchetype="card.archetype"
        />
      </div>
    </div>   
  </main>

</template>



<style lang="scss" scoped>
@use '../assets/SCSS/main.scss' as *;

.col {
  background-color: $secondary-color;
}

p {
  color: white;
}

.form-select {
  border: 1px solid black;
  width: fit-content;
}

</style>