<template lang="pug">
  div
    slot(name="titulo") 
        h1 Titulo
    slot(name="cuerpo")
        p Cuerpo
</template>

<script>
export default {

}
</script>

<style>

</style>