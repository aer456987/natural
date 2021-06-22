<template>
  <section class="container pageContent py-5">
    <h1 class="text-center fw-bold m-0 pb-5">商品管理</h1>

    <!-- <section class="row">
      <span class="col-1 border">1</span>
      <span class="col-1 border">2</span>
      <span class="col-1 border">3</span>
      <span class="col-1 border">4</span>
      <span class="col-1 border">5</span>
      <span class="col-1 border">6</span>
      <span class="col-1 border">7</span>
      <span class="col-1 border">8</span>
      <span class="col-1 border">9</span>
      <span class="col-1 border">10</span>
      <span class="col-1 border">11</span>
      <span class="col-1 border">12</span>
    </section> -->
    <div class="row justify-content-between pb-2">
      <span class="col-md-4 col-lg-2">
        <select class="form-select"
          @change="changeProduct"
          v-model="select">
          <option value="全部商品" selected>全部商品</option>
          <option value="募款專案">募款專案</option>
          <option value="飼料">飼料</option>
          <option value="籠具">籠具</option>
          <option value="玩具">玩具</option>
          <option value="其餘用品">其餘用品</option>
        </select>
      </span>
      <div class="col-6 border"></div>
    </div>

    <table class="table table-hover text-center
      rounded overflow-hidden">
      <thead class="table-dark">
        <tr>
          <th width="10%">分類</th>
          <th width="8%">圖片</th>
          <th width="13%">產品ID</th>
          <th width="12%">品名</th>
          <th width="12%">描述</th>
          <th width="10%">說明</th>
          <th width="7%">原價</th>
          <th width="7%">售價</th>
          <th width="7%">狀態</th>
          <th width="7%">操作</th>
          <th width="7%">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in datas.products"
          :key="product.id">

          <td data-title="分類">
            {{ product.category }}
          </td>
          <td data-title="圖片">
            <img
              :src="product.imageUrl"
              alt="product.title"
              class="w-100">
          </td>
          <td data-title="產品ID" class="text-break">
            {{ product.id }}
          </td>
          <td data-title="品名">
            {{ product.title }}
          </td>
          <td
            data-title="描述"
            class="text-break">
            {{ product.description }}
          </td>
          <td
            data-title="說明"
            class="text-break">
            {{ product.content }}
          </td>
          <td data-title="原價">
            {{ product.origin_price }}
          </td>
          <td data-title="售價">
            {{ product.price }}
          </td>
          <td data-title="狀態">
            {{ product.is_enabled }}
          </td>
          <td data-title="操作">
            修改
          </td>
          <td data-title="刪除">
            <i class="bi bi-trash-fill
              btn btn-outline-danger"></i>
          </td>
          <!-- {{ product }} -->

        </tr>
      </tbody>
    </table>
    <Pagination :page="pagination"></Pagination>
  </section>
</template>

<script>
// import swal from 'sweetalert';
import Pagination from '@/components/pagination.vue';

export default {
  data() {
    return {
      datas: {
        pagination: {},
        products: {},
        select: '',
      },
    };
  },
  components: { Pagination },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products`; // ?page=:page
      console.log('取得商品', page);

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)取得產品 res', res);
            this.datas.pagination = res.data.pagination;
            this.datas.products = res.data.products;
            console.log('(成功-後台)取得產品 vue', this.datas);
          } else {
            console.log('(錯誤-後台)取得產品 res', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)取得產品 err');
          console.dir(err);
        });
    },
  },
  created() {
    this.getProducts();
    this.select = '全部商品';
  },
};
</script>
