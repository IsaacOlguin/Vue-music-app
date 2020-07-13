<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
        figure.image.is-1by1
            img(v-bind:src="track.album.images[0].url")
    .card-content
        .media
            .media-left
                figure.image.is-48x48
                    img(v-bind:src="track.album.images[0].url")
            .media-content
                p.title.is-6
                    strong {{ track.name }}
                p.subtitle.is-6 {{ track.artists[0].name }}
        .content
            small {{ track.duration_ms | ms-to-mm }}
            nav.level
                .level-left
                    a.level-item
                        button.button.is-success.is-light(@click="waehlenLied") Play
                    a.level-item
                        button.button.is-info.is-light(@click="InformationDesLieds(track.id)") Detalles
</template>

<script>
export default {
    props: {
        track: {
            type: Object,
            required: true
        }
    },
    methods: {
        waehlenLied() {
            this.$emit('waehlenLied', this.track.id);

            this.$bus.$emit('set-track', this.track);
        },
        InformationDesLieds(id) {
            this.$router.push({ name: 'app-track-detail', params: {id: id} })
        }
    }
}
</script>

<style>

</style>