<template>
  <!-- 分頁 -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center pt-2">
      <li
        v-if="pagesData.has_pre"
        class="page-item"
        :class="{ 'disabled' : !pagesData.has_pre }"
        @click="$emit('get-data', pagesData.current_page - 1)"
      >
        <button
          type="button"
          class="page-link"
        >&laquo;</button>
      </li>
      <template
        v-for="page in pagesData.total_pages"
        :key="`分頁_${page}`">
        <li
          class="page-item"
          :class="{ 'active' : pagesData.current_page === page }"
          @click="$emit('get-data', page)"
        >
          <button
            type="button"
            class="page-link"
          >{{ page }}</button>
        </li>
      </template>
      <li
        v-if="pagesData.has_next"
        class="page-item"
        @click="$emit('get-data', pagesData.current_page + 1)"
      >
        <button
          type="button"
          class="page-link"
        >&raquo;</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DashboarPagination',
  props: ['paginationPage'],
  data() {
    return {
      pagesData: {},
    };
  },
  watch: {
    paginationPage: {
      handler(n) {
        this.pagesData = n;
      },
    },
  },
  methods: {},
  created() {},
};
</script>
