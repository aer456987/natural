<template>
  <!-- 商品頁篩選 -->
  <nav class="row text-center bg-secondary m-0">
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
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0 rounded-0"
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
        class="btn btn-outline-primary textStyle_rwd_2 py-1 border-0"
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
        value="周邊商品"
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
        周邊商品
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
