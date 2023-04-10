<template>
  <div class="d-flex  mb-2" style="height: 100vh;">
    <div class="col d-flex justify-content-center bg-image" style="
    background-image: url('https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-engineering-and-information-technologies/news-and-events/2022/2022-why-study-electrical-engineering-hero.jpg');
    height: 100vh; transform: skew(-15deg);">
    </div>
    <div class="col">
      <div class="min-h-full flex items-center justify-end  pr-72">
        <div class="max-w-md w-full space-y-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
