<template>
  <div class="bg-gray-100">
    <div class="bg-white pb-8 text-center pt-24 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 pl-24 pr-24 sm:text-4xl d-flex justify-content-between">
      {{ route.params.id ? model.title : "Creează Laborator Virtual" }}
      <button
        v-if="route.params.id"
        type="button"
        @click="deleteVlab()"
        class="py-2 px-3 text-xl text-white bg-red-500 rounded-md hover:bg-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 -mt-1 inline-block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
       Șterge Laborator
      </button>
    </div>

    <div v-if="vlabLoading" class="d-flex justify-content-center pb-96 pt-96 mt-96 mb-96">
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
    <form v-else @submit.prevent="saveVlab" class="animate-fade-in-down">
      <div class="sm:rounded-md sm:overflow-hidden pr-12 pl-12 mt-12 pb-24">
        <br>
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6 mr-36 ml-36">
          <!-- Image -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Imagine
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
                class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100">
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
                Schimbă
              </button>
            </div>
          </div>
          <!--/ Image -->

          <!-- Title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Titlu
            </label>
            <input
              type="text"
              name="title"
              id="title"
              v-model="model.title"
              autocomplete="vlab_title"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <!--/ Title -->

          <!-- Description -->
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Descriere
            </label>
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="3"
                v-model="model.description"
                autocomplete="vlab_description"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Descrie laboratorul"
              />
            </div>
          </div>
          <!-- Description -->

          <div>
            <label for="lab" class="block text-sm font-medium text-gray-700">
              Virtual Lab
            </label>

            <div>Selectează Laborator Virtual</div>
            <select v-model="model.lab">
              <option>roplcondelay</option>
              <option>roplcoffdelay</option>
            </select>
          </div>


          <div>
            <label for="status" class="block text-sm font-medium text-gray-700">
              Status
            </label>

            <select v-model="model.status">
              <option>Published</option>
              <option>Work in progress</option>
              <option>Under review</option>
            </select>
          </div>
        </div>
        <div class="px-4 py-3 bg-white text-right sm:px-6 mr-36 ml-36">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Salvează
          </button>
        </div>
      </div>
      <Notification />
    </form>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import store from "../../store";
import Notification from "../../components/Notification.vue";

const router = useRouter();
const route = useRoute();

const vlabLoading = computed(() => store.state.currentVlab.loading)

let model = ref({
  title: "",
  description: null,
  status: null,
  lab: null,
  image: null,
  image_url: null,
});

watch (
  () => store.state.currentVlab.data,
  (newVal, oldVal) => {
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: newVal.status !== "draft",
    }
  }
);

if (route.params.id) {
  store.dispatch('getVlab', route.params.id);
}

function onImageChoose (ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    model.value.image = reader.result;

    model.value.image_url = reader.result;
    ev.target.value = "";
  };
  reader.readAsDataURL(file);
}

function saveVlab() {
  store.dispatch("saveVlab", model.value).then(({ data }) => {
    store.commit('notify', {
      type: 'success',
      message: 'Laboratorul a fost actualizat cu succes!'
    })
    router.push({
      name: "VeziLabVirtuale",
      params: { id: data.data.id },
    });
  });
}

function deleteVlab() {
  if (
    confirm (
      `Ești sigur că dorești să ștergi acest Laborator?.`
    )
  ) {
    store.dispatch("deleteVlab", model.value.id).then(() => {
      router.push({
        name: "Vlabs",
      })
    });
  }
}
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden !important;
}
p {
  text-align: justify;
}
body {
  background-color: #222;
}
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370DB;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #2a32dc;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16b3e3;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0%   {
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0%   {
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
