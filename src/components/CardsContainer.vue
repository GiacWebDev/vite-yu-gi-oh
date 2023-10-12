<script>

import CharacterCard from './partials/CharacterCard.vue';

export default {
  name: 'CardsContainer',
  components: {
    CharacterCard
  }
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

main {
  padding-top: 50px;
}
.container {
  background-color: white;
}


</style>