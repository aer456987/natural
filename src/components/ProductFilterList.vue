<template>
<!-- 商品頁篩選 -->
<nav class="row text-center bg-secondary m-0 shadow">
  <div
    class="btn-group p-0"
    role="group"
    aria-label="Basic radio toggle button group"
  >

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="all"
      class="btn-check"
      checked
    />
    <label
      class="btn btn-outline-primary py-1 border-0 rounded-0"
      for="all"
    >
      全部商品
    </label>

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="fundraise"
      class="btn-check"
    />
    <label
      class="btn btn-outline-primary py-1 border-0"
      for="fundraise"
    >
      募款專案
    </label>

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="charitableActivities"
      class="btn-check"
    />
    <label
      class="btn btn-outline-primary py-1 border-0"
      for="charitableActivities"
    >
      公益活動
    </label>

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="lecture"
      class="btn-check"
    />
    <label
      class="btn btn-outline-primary py-1 border-0"
      for="lecture"
    >
      講座
    </label>

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="organicFood"
      class="btn-check"
    />
    <label
      class="btn btn-outline-primary py-1 border-0"
      for="organicFood"
    >
      有機食品
    </label>

    <input
      type="radio"
      name="productFilterRadio"
      autocomplete="off"
      id="merchandise"
      class="btn-check"
    />
    <label
      class="btn btn-outline-primary py-1 border-0 rounded-0"
      for="merchandise"
    >
      周邊商品
    </label>
  </div>
</nav>
</template>

<script>
export default {
  name: 'ProductFilterList',
};
</script>
