<template>
  <footer class="text-center bg-dark text-white">
    <div class="container p-4 pb-0 ">
      <!-- Section: Social media -->
      <div class="text-center">
        <section class="mb-4">
          <!-- Facebook -->
          <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998;" href="https://facebook.com"
             target="_blank"
             role="button">
            <i class="fab fa-facebook-f"></i></a>

          <!-- Twitter -->
          <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee;" href="https://twitter.com"
             target="_blank"
             role="button">
            <i class="fab fa-twitter"></i></a>

          <!-- Instagram -->
          <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac;" href="https://instagram.com"
             target="_blank"
             role="button">
            <i class="fab fa-instagram"></i></a>

          <!-- Linkedin -->
          <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca;" href="https://linkedin.com"
             target="_blank"
             role="button">
            <i class="fab fa-linkedin-in"></i></a>
        </section>
      </div>
    </div>

    <!-- Section: Social media -->
    <!--Newsletter-->
    <div class="container p-4 pb-0">
      <section class="">
        <form action="" @submit.prevent="handleSubmit">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div class="col-md-5 col-12">
              <!-- Email input -->
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example29" class="form-control" v-model="email"/>
                <label class="form-label" for="form5Example29">Email address</label>
              </div>
            </div>
            <div class="col-auto">
              <!-- Submit button -->
              <button type="submit" class="button-65">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-4 text-white">
        <div class="row mt-3">
          <div class="col-md-2 col-lg-2 col-xl-3 mx-auto">
            <img src="../assets/newlogo.png" class="w-[140px] h-auto" alt="logo">
            <p>
              Get your latest informations in Electrical Engineering.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
            <h6 class="text-uppercase fw-bold mb-2">
              News
            </h6>
            <img src="../assets/horizline.png" class="horizline2 mb-4">
            <p>
              <a href="#" class="textcustom">Embedded Systems</a>
            </p>
            <p>
              <a href="#" class="textcustom">Automotive Electronics</a>
            </p>
            <p>
              <a href="#" class="textcustom">Power Electronics</a>
            </p>
            <p>
              <a href="#" class="textcustom">Internet of Things</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">
              Useful links
            </h6>
            <img src="../assets/horizline.png" class="horizline2 mb-4">
            <p>
              <a href="#" class="textcustom">Tools</a>
            </p>
            <p>
              <a href="#" class="textcustom">Forums</a>
            </p>
            <p>
              <a href="#" class="textcustom">Datasheets</a>
            </p>
            <p>
              <a href="#" class="textcustom">Podcasts</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">
              Contact
            </h6>
            <img src="../assets/horizline.png" class="horizline2 mb-4">
            <p><i class="fas fa-home me-3"></i> Bucharest, RO</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              contact@fielectrical.net
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>

    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="copy text-center text-white p-4">
      © 2022
      <a class="text-reset fw-bold hover:text-blue-500" href="/home">FIElectrical - Popescu Alexandru</a>
    </div>
    </section>
  </footer>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      email: ''
    }
  },

  methods: {
    handleSubmit() {
      alert("Subscribed")
      console.log('email:', this.email)
    }
  }
}
</script>


<style scoped>
* {
  font-size: 14px;
}
footer {
  background: url(http://themes.potenzaglobalsolutions.com/html/constro/images/pattern/pattern2.jpg);
  color: #c5c5c5;
}
.horizline2 {
  display: block;
  max-width: 50%;
  max-height: 5px;
  transform: rotate(180deg);
}

.copy {
  background: rgba(0,0,0,0.5);
}
.textcustom {
  color: white;
}

.textcustom:hover {
  transition: 0.4s ease all;
  color: #148acb;
}

img {
  height: 150px;
}

.button-65 {
  appearance: none;
  backface-visibility: hidden;
  background-color: #262626;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  letter-spacing: normal;
  line-height: 1;
  outline: none;
  overflow: hidden;
  padding: 14px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  display: block;
  margin: auto;
}

.button-65:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.button-65:hover:after {
  opacity: .5;
}

.button-65:active {
  box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
  transform: translateY(2px);
  transition-duration: .35s;
}

.button-65:active:after {
  opacity: 1;
}

@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 130px;
  }
}
</style>
