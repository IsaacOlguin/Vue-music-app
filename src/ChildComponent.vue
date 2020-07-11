.<template lang="pug">
    div
        h1 Este es un componente hijo. Hola
        local-component
</template>

<script>
import LocalComponent from "./LocalComponent.vue";

export default {
  components: {
    LocalComponent: LocalComponent
  }
};
</script>
<!--
<style>

</style>
-->
