<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent py-5">
    <h1 class="text-center fw-bold m-0 pb-5">商品管理</h1>
    <div class="row justify-content-between pb-2">
      <span class="col-md-4 col-lg-2 pb-1">
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
      <span class="col-lg-2 text-end pb-1">
        <button class="btn btn-outline-brown">
          新增產品
        </button>
      </span>
    </div>

    <table class="table table-hover text-center text-break
      rounded overflow-hidden shadow-sm">
      <thead class="table-dark align-middle">
        <tr>
          <td width="9%">分類</td>
          <td width="7%">圖片</td>
          <td width="13%">產品ID</td>
          <td width="12%">品名</td>
          <td width="12%">描述</td>
          <td width="12%">說明</td>
          <td width="7%">原價</td>
          <td width="7%">售價</td>
          <td width="7%">狀態</td>
          <td width="7%">操作</td>
          <td width="7%">刪除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">

          <td data-title="分類">
            {{ product.category }}
          </td>

          <td data-title="圖片">
            <img class="w-100"
              :src="product.imageUrl"
              alt="product.title">
          </td>

          <td data-title="產品ID">
            {{ product.id }}
          </td>

          <td data-title="品名">
            {{ product.title }}
          </td>

          <td data-title="描述">
            {{ product.description }}
          </td>
          <td data-title="說明">
            {{ product.content }}
          </td>

          <td data-title="原價">
            {{ product.origin_price }}
          </td>

          <td data-title="售價">
            {{ product.price }}
          </td>

          <td data-title="狀態"
            :class="{ 'text-gray' : !product.is_enabled }">
            {{ product.is_enabled ? '上架' : '未上架' }}
          </td>

          <td data-title="操作">
            <button class="btn btn-outline-brown p-1">
              修改
            </button>
          </td>

          <td data-title="刪除">
            <i class="bi bi-trash-fill
              btn btn-outline-danger"
              @click="delSwalFn(product)"></i>
          </td>
          <!-- {{ product }} -->

        </tr>
      </tbody>
    </table>
    <Pagination :pagination-page="productPagination" @get-data="getProducts"></Pagination>
  </section>
</template>

<script>
import Pagination from '@/components/DashboarPagination.vue';
import swal from 'sweetalert';

export default {
  name: 'DashboardProducts',
  data() {
    return {
      loadingStatus: false,
      productPagination: {},
      products: {},
      select: '',
    };
  },
  components: { Pagination },
  methods: {
    getProducts(page = 1) { // 取得全部商品
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)取得產品 res', res);
            this.productPagination = res.data.pagination;
            this.products = res.data.products;
            this.loadingStatus = false;
            console.log('(成功-後台)取得產品 vue', this.productPagination, this.products);
          } else {
            console.log('(錯誤-後台)取得產品 res', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)取得產品 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delProduct(id) { // 刪除商品
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product/${id}`; // ${id}
      this.loadingStatus = true;

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.swalFn(res.data.message, 'success');
            this.getProducts();
            this.loadingStatus = false;
          } else {
            this.swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)刪除商品 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    swalFn(title, icon, timer = 1500, text, button = false) { // 一般提示視窗
      // success (成功) ； error (叉叉) ； warning(警告) ； info (說明)
      const txt = {
        title,
        text,
        icon,
        button,
        timer,
        closeOnClickOutside: false,
      };
      swal(txt);
    },
    delSwalFn(product) { // 刪除商品的確認視窗
      // console.log(product.title, product.id);
      const txt = {
        title: `確定要刪除 [${product.title}] 嗎？`,
        text: '請注意，刪除後將無法復原！',
        icon: 'warning',
        buttons: ['取消', '確定刪除'],
        dangerMode: true,
      };
      swal(txt)
        .then((willDelete) => { // 針對選項執行不同動作
          if (willDelete) {
            this.delProduct(product.id);
          } else {
            this.swalFn('已取消操作', 'error');
          }
        });
    },
  },
  created() {
    this.getProducts();
    this.select = '全部商品';
  },
};
</script>
