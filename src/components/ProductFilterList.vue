<template>
  <!-- 商品頁篩選 -->
  <nav class="row product_filter_nav overflow-auto bg-secondary m-0
    text-nowrap text-center"
  >
    <form
      class="btn-group p-0"
      role="group"
      aria-label="分類選單"
      ref="select"
    >

      <input
        type="radio"
        name="productFilterRadio"
        value="全部商品"
        autocomplete="off"
        id="all"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
        checked
      />
      <label
        class="btn btn-outline-primary
          textStyle_rwd_2 py-1 border-0 rounded-0"
        for="all"
      >
        全部商品
      </label>

      <input
        type="radio"
        name="productFilterRadio"
        value="募款專案"
        autocomplete="off"
        id="fundraise"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
      />
      <label
        class="btn btn-outline-primary
          textStyle_rwd_2 py-1 border-0"
        for="fundraise"
      >
        募款專案
      </label>

      <input
        type="radio"
        name="productFilterRadio"
        value="公益活動"
        autocomplete="off"
        id="charitableActivities"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
      />
      <label
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0"
        for="charitableActivities"
      >
        公益活動
      </label>

      <input
        type="radio"
        name="productFilterRadio"
        value="講座"
        autocomplete="off"
        id="lecture"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
      />
      <label
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0"
        for="lecture"
      >
        講座
      </label>

      <input
        type="radio"
        name="productFilterRadio"
        value="有機食品"
        autocomplete="off"
        id="organicFood"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
      />
      <label
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0"
        for="organicFood"
      >
        有機食品
      </label>

      <input
        type="radio"
        name="productFilterRadio"
        value="環保商品"
        autocomplete="off"
        id="merchandise"
        class="btn-check"
        v-model="productSelect"
        @change="$emit('filterListMethods', productSelect)"
      />
      <label
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0 rounded-0"
        for="merchandise"
      >
        環保商品
      </label>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'ProductFilterList',
  data() {
    return {
      productSelect: '',
    };
  },
  emits: ['filterListMethods'],
};
</script>

<style lang="scss">
.product_filter_nav{
  // 捲軸本身，可以設定寬度
  &::-webkit-scrollbar{
    height: 6px;
  }

  // 捲軸可以拉的部分
  &::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: rgba(#225243, .6);
  }

  // 捲軸空的地方，也可以說背景的顏色
  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(#225243, .5);
  }
}
</style>
