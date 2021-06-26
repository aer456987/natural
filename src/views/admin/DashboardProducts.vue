<template>
  <DashboarLoading :status="loadingStatus"></DashboarLoading>
  <section class="container pageContent py-5">
    <h1 class="text-center fw-bold m-0 pb-5">商品管理</h1>
    <div class="row justify-content-between pb-2">
      <span class="col-md-4 col-lg-2 pb-1">
        <select
          class="form-select"
          @change="changeProduct"
          v-model="select"
        >
          <option value="全部商品" selected>全部商品</option>
          <option value="食物">食物</option>
          <option value="周邊用品">周邊用品</option>
          <option value="募款專案">募款專案</option>
        </select>
      </span>
      <span class="col-lg-6 text-end pb-1">
        <button
          class="btn btn-brown"
          @click="openModal(true)"
        >新增產品</button>

        <button
          type="button"
          class="btn btn-outline-brown btn-sm fs-5 ms-1"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </span>
    </div>

    <table
      class="table table-hover text-center text-break
        rounded overflow-hidden shadow-sm"
    >
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
        <tr
          v-for="product in products"
          :key="product.id"
        >

          <td data-title="分類">
            {{ product.category }}
          </td>

          <td data-title="圖片">
            <img
              class="w-100"
              :src="product.imageUrl"
              alt="product.title"
            />
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

          <td
            data-title="狀態"
            :class="{ 'text-gray' : !product.is_enabled }"
          >
            {{ product.is_enabled ? '上架' : '未上架' }}
          </td>

          <td data-title="操作">
            <button
              class="btn btn-outline-brown p-1"
              @click="openModal(false, product)"
            >修改</button>
          </td>

          <td data-title="刪除">
            <i
              class="bi bi-trash-fill btn btn-outline-danger"
              @click="delProductFn(product)"
            ></i>
          </td>

        </tr>
      </tbody>
    </table>
    <Pagination
      :pagination-page="productPagination"
      @get-data="getProducts"
    ></Pagination>

    <ProductModal
      ref="productModal"
      :modal-product="tempProduct"
      :modal-isNew="isNew"
      @modal-update-product="updateProduct"
    ></ProductModal>

  </section>
</template>

<script>
import { swalFn, delSwalFn } from '@/methods/swal';
import DashboarLoading from '@/components/DashboarLoading.vue'; // 後台Loading元件
import Pagination from '@/components/DashboarPagination.vue';
import ProductModal from '@/components/DashboarProductModal.vue';

export default {
  name: 'DashboardProducts',
  data() {
    return {
      loadingStatus: false,
      select: '',
      products: [],
      productPagination: {},
      tempProduct: {},
      isNew: Boolean,
    };
  },
  components: { DashboarLoading, Pagination, ProductModal },
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
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product/${id}`;
      this.loadingStatus = true;

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.getProducts();
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)刪除商品 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delProductFn(data) { // 刪除提示視窗
      const { title, id } = data;
      delSwalFn(title, id, this.delProduct);
    },
    updateProduct(item) { // 新增產品 & 修改產品
      this.loadingStatus = true;
      let url = '';
      let httpMethods = '';

      if (this.isNew) {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product`;
        httpMethods = 'post';
      } else {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product/${item.id}`;
        httpMethods = 'put';
      }

      this.$http[httpMethods](url, { data: item })
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)新增產品 res', res);
            swalFn(res.data.message, 'success');
            this.getProducts();
            this.$refs.productModal.hideModal();
          } else {
            console.log('(錯誤-後台)新增產品 res', res);
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)新增產品 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    openModal(isNew, product) { // 打開模組
      if (isNew) {
        this.isNew = true;
        this.tempProduct = { category: '請選擇分類' };
      } else {
        this.isNew = false;
        this.tempProduct = JSON.parse(JSON.stringify(product));
      }
      this.$refs.productModal.openModal();
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
    this.select = '全部商品';
  },
};
</script>
