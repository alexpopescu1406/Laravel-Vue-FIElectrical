<template>
  <div class="demo text-center mb-12">
    <button
      class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center text-xl  hover-shadow-soft mb-4"
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
  </div>

</template>

<script>
import Teorie from "./Teorie.vue";
import Simulare from "./Simulare.vue";
import Test from "./Test.vue";

export default {
  name: "roplcoffdelay",
  components: {
    Simulare,
    Teorie,
    Test,
  },
  data() {
    return {
      currentTab: 'Teorie',
      tabs: ['Teorie', 'Simulare', 'Test']
    }
  },
}
</script>
<style scoped>
.demo {
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  cursor: pointer;
  margin-bottom: -1px;
  margin-right: 5px;
}

.tab-button:hover {
}

.tab-button.active {
  background: #E6E6FA;
}

.tab {
  padding: 10px;
}
</style>
