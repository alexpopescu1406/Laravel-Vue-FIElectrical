<template>
  <blog-component title="Latest news in Electrical Engineering">
    <template v-slot:header>
      <div class="flex justify-content-center">
          <router-link :to="{ name: 'BlogCreate' }"
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
            d="M12 4v16m8-8H4" />
            </svg>
          Add new Blog Post
          </router-link>
      </div><br>
    </template>
    subtitle1="Title1"
    subtitle2="Title2"
    subtitle3="Title3">
    <template v-slot:content1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis consectetur efficitur. Ut pharetra dolor nisi, et congue leo vulputate vitae. Nulla convallis massa ac placerat sagittis. Nunc sit amet leo in tortor molestie hendrerit eu nec quam. Proin mollis dui quis lacus suscipit tincidunt. Donec sed ultricies elit. Donec justo enim, egestas sed justo porta, pharetra bibendum massa.
    </template>
    <template v-slot:content2 >
      Suspendisse potenti. Aliquam scelerisque ullamcorper pulvinar. Vivamus pellentesque risus quis sollicitudin pretium. Nunc rhoncus, velit vel venenatis tincidunt, urna arcu semper augue, non commodo lacus elit et lectus. Vestibulum porta libero sit amet est bibendum, non tincidunt justo elementum. Vestibulum at convallis libero. Nulla est neque, posuere eu consectetur vitae, varius eget tellus. Nulla facilisi. Integer et libero at arcu elementum eleifend. Sed ipsum sem, lacinia vitae odio sed, tincidunt cursus arcu.
    </template>
    <template v-slot:content3>
      Curabitur quis pretium libero, vel pellentesque lectus. Nunc laoreet mi et lacus convallis pellentesque. Morbi consequat sed erat quis gravida. Aenean aliquam ante ac tincidunt dignissim. Donec sapien tortor, posuere imperdiet turpis non, dictum rhoncus quam. Vestibulum eu elit purus. Praesent id pulvinar mauris. Nam sit amet neque porttitor, porttitor risus at, tempor lorem. Nunc sed velit non nisi venenatis tempor. Proin ut urna erat. Aenean finibus dignissim dolor ac sodales.
    </template>
  </blog-component>
</template>

<script>
import store from "../store";
import { computed } from "vue";
import BlogComponent from '../components/BlogComponent.vue';

const blogs = computed(() => store.state.blogs);

export default {
  name: "Blogs",
  components: {
    BlogComponent
  },
};
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
.sidebar-widget .tags li a {
  background: #cfe0fc;
  color: #353535;
  padding: 4px 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}
.sidebar-widget .tags li a:hover {
  background: #ffffff;
  color: #353535;
  padding: 4px 8px;
  border: 1px solid;
  border-color: #cfe0fc;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}
ul li {
  padding: 0;
  margin: 0;
  line-height: 30px;
}
.list-inline-item {
  display: inline-block;
}
.sidebar-widget{
  background: #ffd200;
  padding: 4px 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
}
.textcustom {
  color:rgb(0, 0, 0);
  font-family: 'Roboto', sans-serif;
  font-weight: normal;

}
.textcustom:hover {
  transition: 0.4s ease all;
  color: #1bc76e;
}
.horizline {
  display: block;
  max-width: 12%;
  margin-left: auto;
  margin-right: auto;
  padding: 1px;
}
.horizline2 {
  display: block;
  max-width: 25%;
  margin-right: auto;
  margin-bottom: 8px  ;
}
#textt {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.carousel .carousel-item {
  max-height:500px;
}
.carousel-item img {
  object-fit:cover;
  max-height:600px;
}
.post .post-meta {
  margin-bottom: 10px;
  margin-left: 80px;
}
.post .post-meta a {
  font-size: 14px;
  font-weight: 350;
  color: #555555;
  margin-right: 15px;
}
.post .post-meta a:hover {
  transition: 0.4s ease all;
  color: #1bc76e;
}

.post .post-details .title {
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
}
.titletext:hover {
  transition: 0.4s ease all;
  color: #1bc76e;
}
.post .post-meta a .fa {
  margin-right: 80px;
}
.fa {
  margin-right: 50px;
}
.post .post-content {
  margin-left: 80px;
}
.post .post-image + .post-date {
  margin-top: -20px;
  margin-left: 8px;
}
.post .post-date {
  font-size: 27px;
  font-weight: 600;
  color: #333333;
  background: #ffd200;
  display: inline-block;
  width: 60px;
  height: 85px;
  text-align: center;
  position: absolute;
  line-height: 55px;
}
.post .post-date span {
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
  background: #323232;
  width: 60px;
  height: 32px;
  display: block;
  position: absolute;
  bottom: 0;
  letter-spacing: 1px;
  line-height: 32px;
}
.post .post-details a.button {
  margin-bottom: 0;
}
button {
  margin: 20px;
  outline: none;
  color:white;
}
.custom-btn {
  width: 120px;
  height: 35px;
  padding: 10px 25px;
  border: 1px solid #000;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  margin-left: 80px;
}

.btn-3 {
  line-height: 34px;
  padding: 0;
}
.btn-3:hover{
  background: transparent;
  color: #000;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: #000;
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0;
  width: 2px;
}
.btn-3:after {
  width: 0;
  height: 2px;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: #000;
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0;
}
.btn-3 span:after {
  width: 0;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}
header {
  position: fixed;
  z-index: 99;
  top: 0;
}
</style>
