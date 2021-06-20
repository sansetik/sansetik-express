<template>
  <div class="main">
    <AppMenu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import AppMenu from "~/components/AppMenu.vue";
import Vue from "vue"
export default Vue.extend({
  components:{
    AppMenu
  }

})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.main{
  width: 1100px;
  margin: 0 auto;
}
</style>
