<template lang="pug">
    .container
        .columns
            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(:src="track.album.images[0].url")
                    p
                        a.button.is-primary.is-large
                            span.icon(@click="waehlenLied")
            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{ track.name }}
                    .panel-block
                        article.media
                            .media-content
                                .content
                                    ul(v-for="(v, k) in track")
                                        li
                                            strong {{ k }}:&nbsp;
                                            span {{ v }}
                            .nav.level
                                .level-left
                                    a.level-item
            //.is-5.is-offset-4
            //app-track(v-bind:track="this.track")
</template>

<script>
import trackService from "@/services/track";
//import AppTrack from '@/components/AppTrack.vue';
import trackMixin from '@/mixins/AppTrackMixin';

export default {
    data() {
        return {
            track: {}
        }
    },
    created(){
        const id = this.$route.params.id;
        console.log(`El ID del URL es: ${id}`);

        trackService.searchById(id)
            .then(res => {
                console.log(res);
                this.track = res;
            });
    },
    mixins: [
        trackMixin
    ]
}
</script>

<style lang="scss" scoped>
    .columns {
        margin: 20px;
    }
</style>