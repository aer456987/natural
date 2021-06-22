<template>
  <div>
    {{ page }}
    123
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.page);
  },
};
</script>
