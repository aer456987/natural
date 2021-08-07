<template>
  <section class="container py-5 user-select-none">

    <div class="position-relative text-gray mb-2">
      <i class="bi bi-tree fs-3"></i>
      <i class="bi bi-tree-fill fs-5"></i>
      <i class="bi bi-tree fs-1"></i>
      <small><i class="bi bi-tree"></i></small>
      <i class="bi bi-tree fs-2"></i>
      <i class="bi bi-tree fs-3"></i>
      <i class="bi bi-tree fs-1"></i>
      <i class="bi bi-tree fs-2"></i>
    </div>

    <h1 class="mb-5">404 找不到頁面</h1>
    <p class="text-gray fs-3">找不到目標網址，請檢察網址是否有誤。</p>

    <p class="text-gray">也可點擊下方按鈕返回首頁。</p>
    <router-link
        to="/"
        class="btn btn-outline-danger px-3"
      >
        返回首頁
      </router-link>
  </section>
</template>
