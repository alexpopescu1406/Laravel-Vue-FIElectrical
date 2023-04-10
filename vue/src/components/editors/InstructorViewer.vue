<template>
  <div class="container text-gray-900 text-xl">
    <div>
        {{ index + 1 }}. {{ instructor.instructor }}

      <p class="text-gray-500 text-xl mt-2">
        {{ instructor.description }}
      </p>
    </div>
    <div class="mt-3">

    </div>
    </div>
  <hr class="mb-4" />
</template>

<script setup>
import { ref } from "vue";
const { instructor, index, modelValue } = defineProps({
  instructor: Object,
  index: Number,
  modelValue: [String, Array],
});
const emits = defineEmits(["update:modelValue"]);
let model;
if (instructor.type === "checkbox") {
  model = ref({});
}
</script>

<style></style>
