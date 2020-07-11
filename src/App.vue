<template lang="pug">
  #app
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
</template>

<script>
import trackService from "./services/track";

const Lieder = [];

export default {
  name: "app",
  data() {
    return {
      searchQuery: "",
      Lieder: []
    };
  },

  beforeCreate: function() {
    console.log("01. beforeCreate...");
  },
  created() { /* Short version de created: "function(){...}" */
    console.log("02. created...");
  },
  beforeMount() {
    console.log("03. beforeMount...");
  },
  mounted() {
    console.log("04. mounted...");
  },
  beforeUpdate() {
    console.log("05. beforeUpdate...");
  },
  updated() {
    console.log("06. updated...");
  },
  beforeDestroy() {
    console.log("07. beforeDestroy...");
  },
  destroyed() {
    console.log("08. destroyed...");
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
          if(!res) {
            this.Lieder = res.tracks.items;
          }
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
