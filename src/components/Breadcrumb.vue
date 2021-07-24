<template>
  <!-- 麵包屑 -->
  <div>
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb m-0">

        <template
          v-for="(item, key) in breadcrumbData.previous"
          :key="`麵包屑_${key}`"
        >

          <li class="breadcrumb-item">
            <router-link
              :to="item.url"
              class="link-success-light"
            >
              {{ item.title }}
            </router-link>
          </li>
        </template>

        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ breadcrumbData.purpose }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb.vue',
  props: ['breadcrumbData'],
  // previous: {}, 上一個(多個)
  // purpose: {}, 目前頁面
};
</script>
