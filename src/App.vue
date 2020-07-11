<template lang="pug">
  #app
    app-header 
    
    img(src="./assets/logo.png")
    
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text", 
            placeholder="Lieder suchen" 
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="suchen") Suchen
          a.button.is-danger.is-large(@click="reinigen") &times; Reinigen
      .container
        p
          small {{ searchMessage }}

      .container.results
        p(v-for="Lied in Lieder") 
          | {{ Lied.name }} - {{ Lied.artists[0].name }}

    app-footer
</template>

//[Nombre del elemento]{.[Nombre de la clase]|#[IdDelElemento]}
/* .columns 
          .column
          */

<script>
import trackService from "./services/track";
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';

const Lieder = [];

export default {
  name: "app",
  components: {
    AppFooter: AppFooter,
    AppHeader
  },
  data() {
    return {
      searchQuery: "",
      Lieder: []
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.Lieder.length}`;
    }
  },

  methods: {
    suchen() {
      if (this.searchQuery !== "") {
        console.log(this.searchQuery);
        //this.Lieder = Lieder;

        trackService.search(this.searchQuery).then(res => {
          console.log(res);
          this.Lieder = res.tracks.items;
        });
      }
    },
    reinigen() {
      this.Lieder = [];
    }
  }
};
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .results {
    margin-top: 50px;
  }
</style>
