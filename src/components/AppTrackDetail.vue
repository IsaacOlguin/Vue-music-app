<template lang="pug">
    .container(v-if="track && track.id")
        .columns
            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(:src="track.album.images[0].url")
                    p.button-bar
                        a.button.is-primary.is-large
                            span.icon(@click="waehlenLied") Play
            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{ getTrackTitle }}
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
import { mapState, mapActions, mapGetters } from 'vuex';
//import trackService from "@/services/track";
//import AppTrack from '@/components/AppTrack.vue';
import trackMixin from '@/mixins/AppTrackMixin';

export default {
    /*
    data() {
        return {
            track: {}
        }
    },
    */
    created(){
        const id = this.$route.params.id;
        console.log(`El ID del URL es: ${id}`);

        if(!this.track || !this.track.id || this.track.id !== id) { 
            this.getTrackById( { id } )
                .then(() => {
                    console.log('Track loaded...')
                })
        }

        /*
        trackService.searchById(id)
            .then(res => {
                console.log(res);
                this.track = res;
            });
        */
    },
    mixins: [
        trackMixin
    ],
    computed: {
        ...mapState(['track']),
        ...mapGetters(['getTrackTitle'])
    },
    methods: {
        ...mapActions(['getTrackById'])
    }
}
</script>

<style lang="scss" scoped>
    .columns {
        margin: 20px;
    }

    .button-bar {
        margin-top: 20px;
    }
</style>