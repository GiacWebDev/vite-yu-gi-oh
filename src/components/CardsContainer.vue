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
            this.store.fetchData();
        }
    },
    created() {
        store.fetchData();
    },
}
</script>




<template>

  <main>
    <div class="container">

      <select class="form-select mb-4" aria-label="Select archeotype">
        <option value="Alien">Alien</option>
        <option value="Noble Knight">Noble Knight</option>
        <option value="Sinful Spoils">Sinful Spoils</option>
        <option value="Melodious">Melodious</option>
        <option value="Archfiend">Archfiend</option>
      </select>

      <div class="row ">
        <div class="col">
          <p>Cards found: number</p>
        </div>
      </div>

      <div class="row">
        <filterList @search-Filter="searchArcherype" />
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