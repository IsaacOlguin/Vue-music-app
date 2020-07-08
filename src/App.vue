<template lang="pug">
  #app
    img(src="./assets/logo.png")

    br
    .field
      .label Vorname
      .control
        input(v-model="Vorname")
    .field 
      .label Nachname
      .control
        input(v-model="Nachname")
    .field 
      .label Name
      .control
        p {{ fullName }}

    .field 
      .label Jahr des Geburtstags
      .control
        input(v-model="JahrDesGeburtstag" type="date")

    .field
      .label Alter
      .control
        p {{ getAlter }}
    
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Vorname: "",
      Nachname: "",
      JahrDesGeburtstag: ""
    };
  },

  computed: {
    fullName() {
      return `${this.Vorname} ${this.Nachname}`;
    },
    getAlter() {
      const Jahr =
        new Date().getFullYear() -
        new Date(this.JahrDesGeburtstag).getFullYear();
      console.log(new Date().getFullYear());
      console.log(new Date(this.JahrDesGeburtstag).getFullYear());
      console.log(Jahr);
      if (Jahr) return Jahr;
      else return "";
    }
  },

  watch: {
    Vorname(newValue, lastValue) {
      console.log(newValue, lastValue);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
