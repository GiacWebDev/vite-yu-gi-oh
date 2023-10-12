<script>

export default {
  name: 'CharacterCard',
  props: {
    cardImage: String,
    cardName: String,
    cardArchetype: String
  },
}
</script>


<template>

<div class="col-3">
  <div class="_card debug">
    <img :src="cardImage" :alt="cardName">
    <h3>{{ cardName }}</h3>
    <p>{{ cardArchetype }}</p>
  </div>
</div>

</template>


<style lang="scss" scoped>
@use '../../assets/SCSS/main.scss' as *;

._card {
  text-align: center;
  height: 200px;
}

</style>