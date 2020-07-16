<template lang="pug">
  section.hero.is-success
    .hero-head
        header.nav
            .container
                .nav-left
                    .nav-item
                        strong Music App
                .nav-right.nav-menu
                    a.nav-item(@click="selectLang('en')") English &nbsp;&nbsp;
                    a.nav-item(@click="selectLang('es')") Español &nbsp;&nbsp;
                    a.nav-item(@click="selectLang('de')") Deutsch &nbsp;&nbsp;
                    router-link.nav-item(v-bind:to=" {name: 'app-search' } ") {{ $t('search') }} &nbsp;&nbsp;
                    router-link.nav-item(to="about") {{ $t('about') }} &nbsp;&nbsp;
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
    },
    methods: {
        selectLang(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>
<!--
<style>

</style>
-->