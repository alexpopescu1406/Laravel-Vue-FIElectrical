<template>
  <!-- Instructor index -->
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold">
      {{ index + 1 }}. {{ model.instructor }}
    </h3>


    <div class="flex items-center">
      <!-- Add new instructor -->
      <button
        type="button"
        @click="addInstructor()"
        class="
          flex
          items-center
          text-xs
          py-1
          px-3
          mr-2
          rounded-sm
          text-white
          bg-gray-600
          hover:bg-gray-700
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        Add
      </button>
      <!--/ Add new instructor -->

      <!-- Delete instructor -->
      <button
        type="button"
        @click="deleteInstructor()"
        class="
          flex
          items-center
          text-xs
          py-1
          px-3
          rounded-sm
          border border-transparent
          text-red-500
          hover:border-red-600
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        Delete
      </button>
      <!--/ Delete instructor -->
    </div>
  </div>
  <!--/ instructor index -->
  <div class="grid gap-3 grid-cols-12">
    <!-- instructor -->
    <div class="mt-3 col-span-9">
      <label
        :for="'instructor_text_' + model.data"
        class="block text-sm font-medium text-gray-700"
      >Instructor Name</label
      >
      <input
        type="text"
        :name="'instructor_text_' + model.data"
        v-model="model.instructor"
        @change="dataChange"
        :id="'instructor_text_' + model.data"
        class="
          mt-1
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          shadow-sm
          sm:text-sm
          border-gray-300
          rounded-md
        "
      />
    </div>
    <!--/ instructor -->

  </div>

  <div class="mt-3 col-span-9">
    <label
      :for="'instructor_description_' + model.id"
      class="block text-sm font-medium text-gray-700"
    >Description</label
    >
    <textarea
      :name="'instructor_description_' + model.id"
      v-model="model.description"
      @change="dataChange"
      :id="'instructor_description_' + model.id"
      class="
        mt-1
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
    />
  </div>

  <hr class="my-4" />
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";
import store from "../../store";

const props = defineProps({
  instructor: Object,
  index: Number,
});
const emit = defineEmits(["change", "addInstructor", "deleteInstructor"]);
// Re-create the whole instructor data to avoid unintentional reference change
const model = ref(JSON.parse(JSON.stringify(props.instructor)));
// Get instructor types from vuex
const instructorTypes = computed(() => store.state.instructorTypes);
function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function getOptions() {
  return model.value.data.options;
}
function setOptions(options) {
  model.value.data.options = options;
}
// Check if the instructor should have options
function shouldHaveOptions() {
  return ["select", "radio", "checkbox"].includes(model.value.type);
}
// Add option
function addOption() {
  setOptions([
    ...getOptions(),
    { uuid: uuidv4(), text: "" },
  ]);
  dataChange();
}
// Remove option
function removeOption(op) {
  setOptions(getOptions().filter((opt) => opt !== op));
  dataChange();
}
function typeChange() {
  if (shouldHaveOptions()) {
    setOptions(getOptions() || []);
  }
  dataChange();
}
// Emit the data change
function dataChange() {
  const data = model.value;
  if (!shouldHaveOptions()) {
    delete data.data.options;
  }
  emit("change", data);
}
function addInstructor() {
  emit("addInstructor", props.index + 1);
}
function deleteInstructor() {
  emit("deleteInstructor", props.instructor);
}
</script>

<style></style>
