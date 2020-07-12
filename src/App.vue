<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 Slots

    child-component
      h1(slot="titulo") Titulo slot
      div(slot="cuerpo") This is the body

</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';

export default {
  name: "app",
  components: {
    ChildComponent
  },
  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
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
