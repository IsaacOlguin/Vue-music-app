<template lang="pug">
  .container
    .columns
        .column.is-5.is-offset-4
            div(:class="[!typeOfNotification ? 'notification is-success' : 'notification is-danger']")
                slot(name="cuerpoNotificacion") Algo no ocurrio como se esperaba
</template>
//.notification.is-danger
<script>
export default {
  props: {
    typeOfNotification: {
            type: Boolean,
            required: true
        }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>