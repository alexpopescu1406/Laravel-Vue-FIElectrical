<template>
      <div class="post-image clearfix">
        <img alt="blog" :src="blog.image_url" class="w-full h-full object-cover">
      </div>
      <div class="post-date text-black">12<span>june</span></div>
      <div class="post-details">
        <div class="post-title">
          <h4 class="pl-20 pt-3">
            <a href="#" class="text-gray-900 hover:text-green-400">{{ blog.title }}</a>
          </h4>
        </div>
        <div class="post-meta">
          <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
          <a href="#"><i class="fa-solid fa-heart"></i> 12 Like </a>
          <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
        </div>
        <div class="post-content">
          {{ blog.description }}
        </div>
        <div class="d-flex w-100 justify-content-between items-center mt-3 mr-4">
          <a href="#"><button class="custom-btn btn-3 text-dark"><span>Read More</span></button>
          </a>
          <router-link :to="{ name: 'BlogView', params: { id: blog.id } }"
                       class="flex py-2 px-4 border border-transparent text-md rounded-md text-white
                                  bg-indigo-600 hover:bg-indigo-700 ml-96">
            <svg xmins="http://www.w3.org/2000/svg"
                 class="h-6 w-6 mr-2"
                 fill="none"
                 viewbox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
            Edit
          </router-link>
          <button v-if="blog.id" type="button" @click="deleteBlog(blog)"
                  class="trash h-8 w-8 flex items-center justify-center rounded-full text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>

          </button>
        </div>
      </div>
</template>

<script>
export default {
  name: "BlogListItem"
}
</script>

<style scoped>

</style>
