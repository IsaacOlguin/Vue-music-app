<template lang="pug">
  #app
    img(src="./assets/logo.png")

    br
    .field
      .label Name
      .control
        input(v-model="Name")
    button(@click="format") Format

    p {{ formattedName }}
    
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Name: "",
      formattedName: ""
    };
  },
  
  methods: {
    format() {
      this.formattedName = this.Name.split(' ').join('-').toUpperCase();
    }
  }
  
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
