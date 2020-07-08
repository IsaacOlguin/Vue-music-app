<template lang="pug">
  #app
    img(src="./assets/logo.png")

    p(v-show="showValue") {{ valueVShow }}

    p(v-if="showValue") {{ valueVIf }}
    p(v-else-if="showValue") {{ 'else-if' }}
    p(v-else="showValue") {{ 'else' }}

    ul
      li(v-for="i in items") {{ i }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello VueJS',

      showValue: false,
      valueVShow: 'Valor vShow',
      valueVIf: 'Valor vIf',

      items: ['R', 'N', 'A', 'd', 'R', 'k', 'I', 'X']
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
