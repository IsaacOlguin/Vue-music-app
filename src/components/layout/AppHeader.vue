<template lang="pug">
  section.hero.is-success
    .hero-head
        header.nav
            .container
                .nav-left
                    .nav-item
                        strong Music App
                .nav-right.nav-menu
                    router-link.nav-item(v-bind:to=" {name: 'app-search' } ") Suchen
                    router-link.nav-item(to="about") Wir
    .hero-body
        .container.has-text-centered
            h1.title App Music
            h2.subtitle Lists of songs  
            app-player
</template>


<script>
import AppPlayer from '@/components/AppPlayer.vue';

export default {
    components: {
        AppPlayer
    }
}
</script>
<!--
<style>

</style>
-->