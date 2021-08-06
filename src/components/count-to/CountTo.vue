<template>
  <!-- 數字跳轉效果 -->
  <span
    ref="number"
    :id="countId"
  ></span>
</template>

<script>
import CountUp from 'countup';

export default {
  name: 'CountTo',
  computed: {
    countId() {
      return `count_up_${this.countToId}`;
    },
  },
  data() {
    return {
      counter: {},
    };
  },
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0,
    },
    /**
     * @description 起始值
     */
    endVal: {
      type: Number,
      required: true,
    },
    /**
     * @description 小数点后保留位数
     */
    decimals: {
      type: Number,
      default: 0,
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 2000,
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 10,
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: true,
    },
    /**
     * @description 是否分组显示
     */
    useGroup: {
      type: Boolean,
      default: true,
    },
    /**
     * @description 分组显示的分隔符
     */
    separator: {
      type: String,
      default: ',',
    },
    /**
     * @description 整数部分和小数的分隔符
     */
    decimal: {
      type: String,
      default: '.',
    },
    countToId: {
      type: String,
    },
  },
  methods: {
    getCount() {
      return this.$refs.number.innerHTML;
    },
  },
  watch: {
    /**
     * @description 监控endVal值变化，调用update方法
     */
    endVal(newVal) {
      this.counter.update(newVal);
    },
  },
  mounted() {
    /**
     * @description 基于上述参数，初始化一个counter实例
     */
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.countId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGroup: this.useGroup,
          separator: this.separator,
          decimal: this.decimal,
        },
      );
      setTimeout(() => {
        this.counter.start();
      }, this.delay);
    });
  },
};
</script>
