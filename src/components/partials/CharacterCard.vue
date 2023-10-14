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

<div class="col-2">
  <div class="_card">
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
  background-color: #D48F38;
  height: 420px;
  margin-bottom: 20px;
  width: 100%;
  img {
    width: 100%;
  }
  h3 {
    font-size: 17px;
    padding: 10px 5px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
}



</style>