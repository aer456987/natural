<template>
  <CountTo ref="countTo" :end-val="endVal" :className="getClass">
    <!-- <span slot="left" class="prefix-style">总金额： </span>
    <span slot="right">元</span> -->
  </CountTo>
</template>

<script>
import CountTo from '@/components/count-to';

export default {
  name: 'count_to',
  components: {
    CountTo,
  },
  data() {
    return {
      endVal: 5200,
    };
  },
  computed: {
    // 返回自定义样式
    getClass() {
      return ['count-to-number'];
    },
  },
  methods: {
    getNumber() {
      const number = this.$refs.countTo.getCount();
      this.$message({
        message: `当前数值为： ${number}`,
        type: 'success',
      });
      console.log(number);
    },
    updateVal() {
      this.endVal += Math.random() * 100;
    },
  },
};
</script>
