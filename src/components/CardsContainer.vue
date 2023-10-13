<script>
import { store } from '../Data/store'
import CharacterCard from './partials/CharacterCard.vue';

export default {
  name: 'CardsContainer',
  components: {
    CharacterCard
  },
  data() {
    return {
      store
    }
  },
}
</script>




<template>

  <main>
    <div class="container">

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

</style>