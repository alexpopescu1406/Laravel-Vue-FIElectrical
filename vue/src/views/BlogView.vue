<template>
  <div className="text-center pt-24 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Create a Blog Post
  </div>
  <br>
  <div class="px-4 py-5 bg-white space-y-6 sm:p-6 mr-36 ml-36">
    <!-- Image -->
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Image
      </label>
      <div class="mt-1 flex items-center">
        <img
          v-if="model.image_url"
          :src="model.image_url"
          :alt="model.title"
          class="w-64 h-48 object-cover"
        />
        <span
          v-else
          class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
        >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[80%] w-[80%] text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
        <button
          type="button"
          class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <input
            type="file"
            @change="onImageChoose"
            class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
          />
          Change
        </button>
      </div>
    </div>
    <!--/ Image -->

    <!-- Title -->
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700"
      >Title</label
      >
      <input
        type="text"
        name="title"
        id="title"
        v-model="model.title"
        autocomplete="survey_title"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <!--/ Title -->

    <!-- Description -->
    <div>
      <label for="about" class="block text-sm font-medium text-gray-700">
        Description
      </label>
      <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="3"
                v-model="model.description"
                autocomplete="survey_description"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Describe your survey"
              />
      </div>
    </div>
    <!-- Description -->

    <!-- Expire Date -->
    <div>
      <label
        for="expire_date"
        class="block text-sm font-medium text-gray-700"
      >Expire Date</label
      >
      <input
        type="date"
        name="expire_date"
        id="expire_date"
        v-model="model.expire_date"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <!--/ Expire Date -->

    <!-- Status -->
    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input
          id="status"
          name="status"
          type="checkbox"
          v-model="model.status"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="status" class="font-medium text-gray-700"
        >Active</label
        >
      </div>
    </div>
    <!--/ Status -->
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import store from "../store";

const router = useRouter();
const route = useRoute();
let model = ref({
  title: "",
  slug: "",
  status: false,
  description: null,
  image: null,
  image_url: null,
  expire_date: null,
  questions: [],
});
</script>

<style lang="scss" scoped>
.card-header {
  margin-left: -25px;
  margin-bottom: 15px;
}
p {
  text-align: justify;
}

</style>
