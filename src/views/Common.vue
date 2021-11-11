<template>
  <div class="page">
    <router-link to="oneDay">oneDay</router-link>
    <br>
    <router-link to="twoDay">twoDay</router-link>
    <br>
    <router-link to="threeDay">threeDay</router-link>
    <br>
    <router-link to="fourDay">fourDay</router-link>
    <br>
    <router-link to="fiveDay">fiveDay</router-link>
    <br>
    <router-link to="sixthDay">sixthDay</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">

</style>
