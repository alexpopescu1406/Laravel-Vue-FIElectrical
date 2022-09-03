<template>
  <tools-component>
    <template v-slot:header>
      <div class="flex justify-content-center">
        <router-link :to="{ name: 'ToolCreate' }"
                     class="py-2 px-3 text-dark bg-blue-500 rounded-md hover:bg-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"/>
          </svg>
          Add new Tool
        </router-link>
      </div>
      <br>
    </template>
  </tools-component>
</template>

<script setup>
import store from "../store";
import {computed} from "vue";
import ToolsComponent from "../components/ToolsComponent.vue";

const tools = computed(() => store.state.tools);

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
