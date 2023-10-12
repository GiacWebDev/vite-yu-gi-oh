<script>
export default {
  name: 'CharacterCard',
  props: {
    cardImage: String,
    cardTitle: String,
    cardTipologia: String
  }
}
</script>


<template>

<div class="col-3">
  <div class="_card debug">
    <img :src="cardImage" :alt="cardTitle">
    <h3>cardTitle</h3>
    <p>cardTipologia</p>
  </div>
</div>

</template>


<style lang="scss" scoped>
@use '../../assets/SCSS/main.scss' as *;

._card {
  text-align: center;
}

</style>