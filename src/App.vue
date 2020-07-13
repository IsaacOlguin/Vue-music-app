<template lang="pug">
  #app
    app-header 

    router-view

    app-footer
</template>

//[Nombre del elemento]{.[Nombre de la clase]|#[IdDelElemento]}
/* .columns 
          .column
          */

<script>
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/AppHeader.vue';

const Lieder = [];

export default {
  name: "app",
  components: {
    AppFooter: AppFooter,
    AppHeader
  }
};
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d168 solid;
  }
</style>
