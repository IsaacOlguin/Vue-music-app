<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    p {{ 1+1 }}
    p {{ 'Hola ' + 'mundo'}}
    p {{ 'Hola ' + 'mundo ' + person.name }}
    p {{ 'Hola ' + 'mundo ' + person.name.toUpperCase() }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : false }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello VueJS',
      person: {
        name: "Isaac"
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
