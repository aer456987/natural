<template>
<!-- 商品頁篩選 -->
<nav class="row text-center bg-secondary m-0 shadow">
  <div class="btn-group p-0"
    role="group" aria-label="Basic radio toggle button group">

    <input type="radio" name="btnradio" autocomplete="off"
      id="all" class="btn-check"
      checked/>
    <label class="btn btn-outline-primary py-1 border-0 rounded-0" for="all"
    >全部商品</label>

    <input type="radio" name="btnradio" autocomplete="off"
      id="fundraise" class="btn-check"/>
    <label class="btn btn-outline-primary py-1 border-0" for="fundraise"
    >募款專案</label>

    <input type="radio" name="btnradio" autocomplete="off"
      id="feeds" class="btn-check"/>
    <label class="btn btn-outline-primary py-1 border-0" for="feeds"
    >飼料</label>

    <input type="radio" name="btnradio" autocomplete="off"
      id="cages" class="btn-check"/>
    <label class="btn btn-outline-primary py-1 border-0" for="cages"
    >籠具</label>

    <input type="radio" name="btnradio" autocomplete="off"
      id="toys" class="btn-check"/>
    <label class="btn btn-outline-primary py-1 border-0" for="toys"
    >玩具</label>

    <input type="radio" name="btnradio" autocomplete="off"
      id="stationery" class="btn-check"/>
    <label class="btn btn-outline-primary py-1 border-0 rounded-0"
      for="stationery"
    >文青周邊</label>
  </div>
</nav>
</template>

<script>
export default {
  name: 'ProductFilterList',
};
</script>
