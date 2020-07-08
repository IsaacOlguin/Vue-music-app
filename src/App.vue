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
          p
            small {{ searchMessage }}

      .container.results
        .columns 
          .column(v-for="Lied in Lieder") {{ Lied.Name }} - {{ Lied.Saenger }}
</template>

//[Nombre del elemento]{.[Nombre de la clase]|#[IdDelElemento]} 

<script>
const Lieder = [
  {
    Name: 'Amor y Verdad',
    Saenger: 'CF'
  },
  {
    Name: 'Resplandecio',
    Saenger: 'En Espiritu y en Verdad'
  },
  {
    Name: 'No Longer Slaves',
    Saenger: 'Bethel Music'
  }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery : '',
      Lieder: []
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.Lieder.length}`;
    }
  },

  methods: {
    suchen() {
      console.log(this.searchQuery);
      this.Lieder = Lieder;
    },
    reinigen() {
      this.Lieder = [];
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px
  }
</style>
