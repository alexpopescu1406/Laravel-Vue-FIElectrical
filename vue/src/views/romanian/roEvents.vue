<template>
  <ro-event-component>
    <template v-slot:header>

      <br>
    </template>
  </ro-event-component>
</template>

<script setup>
import store from "../../store";
import {computed} from "vue";
import roEventComponent from "../../components/ro/roEventComponent.vue";

const events = computed(() => store.state.events);

</script>

<style lang="scss" scoped>
* {
  color: black;
}
nav {
  position: relative;
}
p {
  text-align: justify;
}
body {
  overflow-x: hidden !important;
}
.list-inline-item {
  display: inline-block;
}
header {
  position: fixed;
  z-index: 99;
  top: 0;
}
</style>
