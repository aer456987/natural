<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg
    navbar-dark bg-primary px-2">
    <div class="container-fluid">
      <router-link
        to="/"
        class="nav-link logo h3 mb-0 p-0">
        <font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top" />
        Natural
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav fs-5 text-center">
          <li class="nav-item scale">
            <router-link to="/" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item scale">
            <router-link to="/products" class="nav-link">線上商城</router-link>
          </li>
          <li class="nav-item scale">
            <div class="nav-link">
              <font-awesome-icon icon="heart" />
            </div>
          </li>
          <li class="nav-item scale">
            <router-link to="/square/cart" class="nav-link position-relative">
              <div class="d-block position-relative
                start-50 border"
                style="width: 30px; height: 30px;">
                <font-awesome-icon icon="cart-plus" />
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    text-danger
                  "
                  >
                  <!-- {{ carts.length }} -->
                  1
                  <!-- v-if="cart.totalQty > 0"{{ cart.totalQty }} -->
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <footer class="p-3 bg-primary">
    <div class="container text-center text-secondary fw-bold">
      作業使用，無商業行為
    </div>
  </footer>
</template>
