<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-mdb-interval="3000">
        <img src="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
             class="d-block w-100" alt="Wild Landscape"/>
      </div>
      <div class="carousel-item" data-mdb-interval="4000">
        <img src="https://www.enersolare.net/wp-content/uploads/2020/02/fotovoltaico-incentivi-2020-1.jpg"
             class="d-block w-100" alt="Camera"/>
      </div>
      <div class="carousel-item" data-mdb-interval="5000" >
        <img src="https://www.sincoselectrical.com/wp-content/uploads/2021/10/Master-of-Engineering-Electrical-Systems-Engineer.jpg"
             class="d-block w-100" alt="Exotic Fruits"/>
      </div>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br><br>

  <section class="page-section-ptb"><div class="container">
    <div class="row">
      <div class="col-sm-12 mb-20">
        <div class="section-title text-center">
          <h2 class="title">Latest news in Electrical Engineering</h2>
          <img src="../assets/horizline.png" alt="line" class="horizline">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 order-2 order-md-1 mt-5 mt-md-0">
        <div class="post">
          <div class="post-image clearfix">
            <img alt="" src="https://www.matrex-e.com/images/transformers2.jpg" class="img-fluid">
          </div>
          <div class="post-date">23<span>JUNE</span></div>
          <div class="post-details">
            <div class="post-title">
              <h4 class="title">
                <a href="#" class="titletext">{{ title }}</a>
              </h4>
            </div>
            <div class="post-meta">
              <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
              <a href="#"><i class="fa-solid fa-heart"></i> 12 Like </a>
              <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
            </div>
            <div class="post-content">
              <slot></slot>
            </div>
            <a href="#"><button class="custom-btn btn-3"><span>Read More</span></button></a>
          </div>
          <hr><br>
        </div>
        <div class="post">
          <div class="post-image clearfix"><img alt="" src="https://www.careergirls.org/wp-content/uploads/2018/06/ElectricalEngineer1440x1000.jpg" class="img-fluid"></div>
          <div class="post-date">12<span>JULY</span></div>
          <div class="post-details">
            <div class="post-title">
              <h4 class="title">
                <a href="#" class="titletext">{{ title }}</a>
              </h4>
            </div>
            <div class="post-meta">
              <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
              <a href="#"><i class="fa-solid fa-heart"></i> 98 Like </a>
              <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
            </div>
            <div class="post-content">
              <slot></slot>
            </div>
            <a href="#"><button class="custom-btn btn-3"><span>Read More</span></button></a>
          </div>
          <hr><br>
        </div>
        <div class="post">
          <div class="post-image clearfix"><img alt=""
                                                src="https://www.sincoselectrical.com/wp-content/uploads/2021/10/Master-of-Engineering-Electrical-Systems-Engineer.jpg"
                                                class="img-fluid"></div>
          <div class="post-date">19<span>JULY</span></div>
          <div class="post-details">
            <div class="post-title">
              <h4 class="title">
                <a href="#" class="titletext">{{ title }}</a>
              </h4>
            </div>
            <div class="post-meta">
              <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
              <a href="#"><i class="fa-solid fa-heart"></i> 98 Like </a>
              <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
            </div>
            <div class="post-content">
              <slot></slot>
            </div>
            <a href="#"><button class="custom-btn btn-3"><span>Read More</span></button></a>
            <nav caria-label="...">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="education">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
          <hr><br>

          <br><br>
        </div>
      </div>

      <div class="col-md-4 order-1 order-md-2"><div class="post-sidebar">
        <div class="sidebar-widget">
          <h4 class="widget-title">About Blog</h4>
          <img src="../assets/horizline.png" alt="line" class="horizline2">
          <p>Lorem ipsum dolor sit ametLorem Ipsum Proin dasd nibh vel velit auctor aliquet. Aenean sollicitudin,<br><br>
            lorem quis bibendum auctor, consequat ipsum, nec sagittis sem nibh id elit nibh vel velit auctor aliquet.
            sem nibh Aenean sollicitudin,</p>
        </div>
        <div class="sidebar-widget">
          <h4>Categories</h4>
          <img src="../assets/horizline.png" alt="line" class="horizline2">
          <ul class="widget-ul list-unstyled list-hand ">
            <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Change Oil and Filter </a></li>
            <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Brake Pads Replacement </a></li>
            <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Timing Belt Replacement</a></li>
            <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Pre-purchase Car Inspection </a></li>
            <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Starter Replacement</a></li>
          </ul>
        </div>
        <div class="sidebar-widget">
          <h4 class="widget-title">Recent Posts</h4>
          <img src="../assets/horizline.png" alt="line" class="horizline2">
          <ul class="list-group list-group-light">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                     class="rounded-circle" />
                <div class="ms-3">
                  <a href="#" class="textcustom fw-bold mb-1"> Digital Logic Design (DLD)</a>
                  <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> June 20, 2022</p>
                </div>
              </div>
              <span class="badge rounded-pill badge-success">Student</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-circle" alt=""
                     style="width: 45px; height: 45px" />
                <div class="ms-3">
                  <a href="#" class="textcustom fw-bold mb-1"> Power Electronics</a>
                  <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> June 29, 2022</p>
                </div>
              </div>
              <span class="badge rounded-pill badge-primary">Univ. Teacher</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-circle" alt=""
                     style="width: 45px; height: 45px" />
                <div class="ms-3">
                  <a href="#" class="textcustom fw-bold mb-1"> Digital Signal and System</a>
                  <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> July 12, 2022</p>
                </div>
              </div>
              <span class="badge rounded-pill badge-warning">Electrical Eng.</span>
            </li>
          </ul>
        </div>
        <br>
        <div class="sidebar-widget archives-widget">
          <h4 class="widget-title">Archives</h4>
          <img src="../assets/horizline.png" alt="line" class="horizline2">
        </div>
        <ul class="list-group list-group-light">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> June</a></i>
            <span class="badge badge-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> July</a></i>
            <span class="badge badge-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> August</a></i>
            <span class="badge badge-primary rounded-pill">21</span>
          </li>
        </ul><br>
        <div class="sidebar-widget">
          <h4 class="widget-title">Tags</h4>
          <img src="../assets/horizline.png" alt="line" class="horizline2">
          <ul class="tags list-inline">
            <li class="list-inline-item"><a href="#" class="textcustom">Design</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Applications</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Electromagnetism</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Systems</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Electronics</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Electricity</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Semiconductors</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Signals</a></li>
            <li class="list-inline-item"><a href="#" class="textcustom">Circuit analysis</a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
  </section>
  <br>
</template>

<script setup>
const props = defineProps({
  title: String,
})


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
.sidebar-wdidget{
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
  max-height:550px;
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
