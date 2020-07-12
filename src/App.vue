<template lang="pug">
  #app
    app-header 
    img(src="./assets/logo.png")

    app-notification(v-show="showNotification")
      p(slot="cuerpoNotificacion") No se encontraron resultados

    app-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="Lied in Lieder")
            app-track(
              v-bind:class="{ 'is-active': Lied.id === Liedgewaehlt }"
              v-bind:track="Lied", 
              v-on:waehlenLied="hoerenEreignis")

    app-footer
</template>

//[Nombre del elemento]{.[Nombre de la clase]|#[IdDelElemento]}
/* .columns 
          .column
          */

<script>
import trackService from "@/services/track";
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppLoader from '@/components/shared/AppLoader.vue';

import AppTrack from '@/components/AppTrack.vue';
import AppNotification from '@/components/shared/AppNotification.vue'

const Lieder = [];

export default {
  name: "app",
  components: {
    AppFooter: AppFooter,
    AppHeader,
    AppTrack,
    AppLoader,
    AppNotification
  },
  data() {
    return {
      searchQuery: "",
      Lieder: [],
      isLoading: false,
      Liedgewaehlt: '',
      showNotification: false
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

        this.isLoading = true;

        console.log(this.searchQuery);
        //this.Lieder = Lieder;

        trackService.search(this.searchQuery).then(res => {
          console.log(res);
          this.showNotification = res.tracks.total === 0;
          this.Lieder = res.tracks.items;
          
          this.isLoading = false;
        });
      }
    },
    reinigen() {
      this.Lieder = [];
    },
    hoerenEreignis(idLied) {
      this.Liedgewaehlt = idLied;
    }
  },
  watch: {
    showNotification() {
      if(this.showNotification){
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
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
