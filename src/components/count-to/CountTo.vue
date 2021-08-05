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
     * @description 小數點後保留位數
     */
    decimals: {
      type: Number,
      default: 0,
    },
    /**
     * @description 動畫延遲開始時間
     */
    delay: {
      type: Number,
      default: 2000,
    },
    /**
     * @description 漸變時長
     */
    duration: {
      type: Number,
      default: 10,
    },
    /**
     * @description 是否使用變速效果
     */
    useEasing: {
      type: Boolean,
      default: true,
    },
    /**
     * @description 是否分組顯示
     */
    useGroup: {
      type: Boolean,
      default: true,
    },
    /**
     * @description 分組顯示的分隔符號
     */
    separator: {
      type: String,
      default: ',',
    },
    /**
     * @description 整數部分和小數的分隔符號
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
     * @description 監控endVal值變化，調用update方法
     */
    endVal(newVal) {
      this.counter.update(newVal);
    },
  },
  mounted() {
    /**
     * @description 基於上述參數，初始化一個counter實例
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
