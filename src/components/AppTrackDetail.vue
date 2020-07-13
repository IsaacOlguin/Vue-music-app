<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                app-track(v-bind:track="this.track")
</template>

<script>
import trackService from "@/services/track";
import AppTrack from '@/components/AppTrack.vue';

export default {
    components: {
        AppTrack: AppTrack
    },
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
    }
}
</script>

<style lang="scss" scoped>
    .columns {
        margin: 20px;
    }
</style>