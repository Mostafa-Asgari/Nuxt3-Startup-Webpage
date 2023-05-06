  <template>
    <div class="header">
      <!-- ------------------ info in top header ------------------ -->

          <!-- <h1 class="text-center animate__animated animate__bounceInRight" style="font-size: 5rem; color: rgb(20, 196, 20);">به نام خدا</h1> -->

        <div class="mm">
          <div class="container-fluid bg-dark py-3 px-5 d-none d-lg-block">
              <div class="row">
                  <div class="col-md-8 d-flex align-items-center">
                      <div class="d-flex text-light align-items-center menu-dark">
                          <div class="d-flex align-items-center">
                              <i class="icon fas fa-map-marker-alt me-2"></i>
                              <h4 class="me-4">123 Street, New York, USA</h4>
                          </div>
                          <div class="d-flex align-items-center">
                              <i class="icon fa fa-phone me-2"></i>
                              <h4 class="me-4">+012 345 6789</h4>
                          </div>
                          <div class="d-flex align-items-center">
                              <i class="icon fa fa-envelope me-2"></i>
                              <h4>info@example.com</h4>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 d-flex text-light" style="direction: rtl;">
                      <a href="#" class="icon text-light fab fa-youtube border rounded-circle me-2 p-2"></a>
                      <a href="#" class="icon text-light fab fa-instagram border rounded-circle me-2 p-2"></a>
                      <a href="#" class="icon text-light fab fa-linkedin border rounded-circle me-2 p-2"></a>
                      <a href="#" class="icon text-light fab fa-facebook border rounded-circle me-2 p-2"></a>
                      <a href="#" class="icon text-light fab fa-twitter border rounded-circle me-2 p-2"></a>
                  </div>
              </div>
          </div>

          <div class="banner container-fluid px-5">
              <div class="nav">
                  <div class="logo d-flex align-items-center">
                      <i class="fa fa-user-tie fa-4x me-2 logoLeft"></i>
                      <h1 class="fw-bold logoLeft">startup</h1>
                  </div>

                  <div class="d-flex align-items-center text-light">
                      <ul class="d-flex">
                          <li><NuxtLink class="item active" to="/">home</NuxtLink></li>
                          <li><NuxtLink to="/about" class="item">about</NuxtLink></li>
                          <li><a class="item" href="">services</a></li>
                          <li><a class="item" href="">blog</a></li>
                          <li><a class="item" href="">pages</a></li>
                          <li><NuxtLink to="/contact" class="item">contact</NuxtLink></li>
                          <button class="text-light p-3 text-capitalize download-in-menu2">download pro version</button>
                      </ul>
                      <i class="fa fa-search fa-2x ms-4 me-5" style="cursor: pointer;color: var(--blue);"></i>
                      <i class="fa fa-bars fa-3x"></i>
                      <button class="text-light p-3 text-capitalize download-in-menu1">download pro version</button>
                  </div>
              </div>
          </div>
        </div>


    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  
  </style>