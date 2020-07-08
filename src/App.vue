<template lang="pug">
  #app
    img(src="./assets/logo.png")

    br
    input(v-model="name")
    p {{ 'El nombre es: <<' + name + '>>'}}

    a(v-bind:href="url") Link
    br
    a(:href="url") Link 2
    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      url: 'http://google.com'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
