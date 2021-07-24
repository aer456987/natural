<template>
  <DashboardLoading :status="loadingStatus"></DashboardLoading>
  <section class="container pageContent py-5 overflow-hidden">
    <h1 class="text-center fw-bold m-0 pb-5">商品管理</h1>
    <div class="row justify-content-between pb-2">
      <div class="col-md-8 col-lg-6 pb-1">

        <div class="row">
          <span class="col-6 col-lg-6 col-xl-4">
            <select
              class="form-select"
              v-model="productSelect"
            >
              <option value="全部商品" selected>全部商品</option>
              <option value="募款專案">募款專案</option>
              <option value="公益活動">公益活動</option>
              <option value="講座">講座</option>
              <option value="有機食品">有機食品</option>
              <option value="周邊商品">周邊商品</option>
            </select>
          </span>

          <span class="col-6 col-lg-6 col-xl-5">
            <span class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入品名"
                aria-label="search"
                aria-describedby="basic-addon1"
                v-model="productSearch"
              />
              <i
                class="bi bi-x-lg fs-6 btn btn-outline-brown input-group-text"
                @click="clearSearch"
              ></i>
            </span>
          </span>
        </div>

      </div>
      <div class="col-md-4 col-lg-6 text-end pb-1">
        <button
          class="btn btn-brown"
          @click="openModal(true)"
        >
          新增產品
        </button>

        <button
          type="button"
          class="btn btn-outline-brown btn-sm fs-5 ms-1"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table
        class="table table-hover text-center text-break
          rounded overflow-hidden shadow-sm"
      >
        <thead class="table-dark align-middle">
          <tr>
            <td width="10%">分類</td>
            <td width="8%">圖片</td>
            <td width="15%">產品ID</td>
            <td width="13%">品名</td>
            <td width="21%">描述</td>
            <td width="8%">售價</td>
            <td width="8%">狀態</td>
            <td width="8%">操作</td>
            <td width="8%">刪除</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in filterProducts"
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

            <td ata-title="描述">
              {{ product.description }}
            </td>

            <td data-title="售價">
              {{ $filters.currency(product.price) }}
            </td>

            <td
              data-title="狀態"
              :class="{ 'text-gray' : !product.is_enabled }"
            >
              {{ product.is_enabled ? '上架' : '未上架' }}
            </td>

            <td data-title="操作">
              <button
                class="btn btn-outline-brown px-2 py-1"
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
    </div>

    <Pagination
      :pagination-isShow="isPaginationShow"
      :pagination-page="productPagination"
      @get-data="getProducts"
    ></Pagination>

    <ProductModal
      ref="productModal"
      :modal-product="tempProduct"
      :modal-isNew="isNew"
      :modal-btn-status="btnStatus"
      @modal-update-product="updateProduct"
    ></ProductModal>

  </section>
</template>

<script>
import { swalFn, delSwalFn } from '@/methods/swal';
import DashboardLoading from '@/components/loading/DashboardLoading.vue'; // 後台Loading元件
import Pagination from '@/components/dashboard/DashboardPagination.vue';
import ProductModal from '@/components/modal/DashboardProductModal.vue';

export default {
  name: 'DashboardProducts',
  data() {
    return {
      loadingStatus: false, // Loading 狀態
      btnStatus: Boolean, // true 禁用; false 啟用
      productSelect: '', // 選單
      productSearch: '', // 搜尋
      productPagination: {}, // 分頁
      products: [], // 原始資料
      tempProduct: {}, // 存放新增 & 修改資料
      isNew: Boolean, // 判斷 madal 是否為新
      isPaginationShow: true, // 分頁狀態
    };
  },
  watch: {
    productSelect() {
      this.productSearch = '';
      if (this.productSelect !== '全部商品') {
        if (this.filterProducts.length > 9) {
          this.isPaginationShow = true;
        } else {
          this.isPaginationShow = false;
        }
      } else if (this.productSelect === '全部商品' && this.productSearch === '') {
        this.isPaginationShow = true;
      }
    },
    productSearch() {
      if (this.productSearch !== '') {
        if (this.filterProducts.length > 9) {
          this.isPaginationShow = true;
        } else {
          this.isPaginationShow = false;
        }
      } else if (this.productSelect === '全部商品' && this.productSearch === '') {
        this.isPaginationShow = true;
      }
    },
  },
  computed: {
    filterProducts() { // 渲染資料
      let newFilterData = [];

      if (this.productSelect === '全部商品') {
        newFilterData = this.products;
      } else {
        newFilterData = this.products.filter((item) => item.category.match(this.productSelect));
      }
      if (this.productSearch !== '') {
        newFilterData = this.products.filter((item) => item.title.match(this.productSearch));
      }

      return newFilterData;
    },
  },
  components: {
    DashboardLoading, Pagination, ProductModal,
  },
  methods: {
    getProducts(page = 1) { // 取得全部商品
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.productPagination = res.data.pagination;
            if (this.productPagination.total_pages > 1) {
              this.isPaginationShow = true;
            }

            this.loadingStatus = false;
          } else {
            swalFn('資料取得失敗', 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('資料取得失敗', 'error');
          this.loadingStatus = false;
        });
    },
    delProduct(action, id) { // 刪除商品
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
        .catch(() => {
          swalFn('操作失敗', 'error');
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
            swalFn(res.data.message, 'success');
            this.getProducts();
            this.$refs.productModal.hideModal();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('操作失敗', 'error');
          this.loadingStatus = false;
        });
    },
    openModal(isNew, product) { // 打開模組
      if (isNew) {
        this.isNew = true;
        this.btnStatus = true;
        this.$refs.productModal.resetForm();
        this.tempProduct = {
          title: '',
          category: '',
          unit: '',
          origin_price: 1,
          price: 1,
          imageUrl: '',
        };
      } else {
        this.isNew = false;
        this.btnStatus = false;
        this.tempProduct = JSON.parse(JSON.stringify(product));
      }
      this.$refs.productModal.openModal();
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.productSelect = '全部商品';
      this.clearSearch();
      this.getProducts();
    },
    clearSearch() { // 清除搜尋
      this.productSearch = '';
    },
  },
  mounted() {
    this.productSelect = '全部商品';
    this.getProducts();
  },
};
</script>
