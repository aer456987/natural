<template class="position-absolute bottom-0 start-50 translate-middle-x">
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-2">
    <div class="container-fluid">
      <router-link
        to="/"
        class="nav-link logo h3 mb-0 p-0"
      >
        <Font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top"
        />
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
      <span
        class="collapse navbar-collapse flex justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav fs-5 text-center">
          <li class="nav-item scale">
            <router-link
              to="/"
              class="nav-link"
            >關於我們</router-link>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/products"
              class="nav-link"
            >線上商城</router-link>
          </li>
          <li class="nav-item scale">
            <span class="nav-link">
              <i class="bi bi-heart-fill"></i>
            </span>
          </li>
        </ul>
      </span>
    </div>
  </nav>
  <!-- 主要頁面 -->
  <router-view></router-view>
  <!-- 頁尾 -->
  <footer class="p-3 bg-primary">
    <div class="container text-center text-secondary">
      作業使用，無商業行為
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Square',
  data() {
    return {
      loadingStatus: false,
    };
  },
};
</script>
