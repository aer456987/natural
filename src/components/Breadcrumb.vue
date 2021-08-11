<template>
  <div>
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
    >
      <ul class="breadcrumb m-0">

        <li
          v-for="(item, key) in breadcrumbData.previous"
          :key="`麵包屑_${key}`"
          class="breadcrumb-item"
        >
          <router-link
            :to="item.url"
            class="link-success-light"
          >
            {{ item.title }}
          </router-link>
        </li>

        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ breadcrumbData.purpose }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['breadcrumbData'],
};
</script>
