<template>
  <!-- 分頁 -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center pt-2">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/admin/dashboardProducts">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/admin/dashboardProducts">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="/admin/dashboardProducts">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">&raquo;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['page'],
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(123);
  },
};
</script>
