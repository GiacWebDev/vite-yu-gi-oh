<script>
import { store } from '../Data/store';
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
      <div class="row">

        <CharacterCard />

        
      </div>
    </div>
  </main>

</template>



<style lang="scss" scoped>
@use '../assets/SCSS/main.scss' as *;

</style>