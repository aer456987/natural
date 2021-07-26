<template>
  <DashboardLoading :status="loadingStatus"></DashboardLoading>
  <div class="container pageContent py-5 overflow-hidden">
    <h2 class="h1 text-center fw-bold m-0 pb-5">
      優惠券管理
    </h2>

    <div class="row justify-content-between pb-2">
      <div class="col-md-6 col-lg-4 col-xl-3 pb-1">
        <div class="input-group">
          <input
            type="search"
            class="form-control"
            placeholder="請輸入優惠碼"
            aria-label="search"
            aria-describedby="basic-addon1"
            id="couponSearch"
            v-model="couponSearch"
          />
          <label
            for="couponSearch"
            class="input-group-text"
          >
            <i class="bi bi-search fs-6"></i>
          </label>
        </div>
      </div>

      <div class="col-md-6 text-end pb-1">
        <button
          class="btn btn-brown-500"
          @click="opanCouponModal(true)"
        >
          新增優惠券
        </button>
        <button
          type="button"
          class="btn btn-outline-brown-500 btn-sm ms-1 fs-5"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>

    <main class="table-responsiv">
      <table
        class="table table-hover rounded overflow-hidden shadow-sm
          text-break text-center"
      >
        <thead class="table-dark align-middle">
          <tr>
            <td>優惠券名稱</td>
            <td>優惠碼</td>
            <td>折扣 % 數</td>
            <td>到期日</td>
            <td>狀態</td>
            <td>操作</td>
            <td>刪除</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="coupon in filterCoupon"
            :key="coupon.id"
          >
            <td data-title="優惠券名稱">
              {{ coupon.title }}
            </td>
            <td data-title="優惠碼">
              {{ coupon.code }}
            </td>
            <td data-title="折扣 % 數">
              {{ coupon.percent }}%
            </td>
            <td data-title="到期日">
              {{ $filters.date(coupon.due_date) }}
            </td>
            <td
              data-title="狀態"
              :class="{
                'text-warning-dark' : coupon.is_enabled,
                'text-gray' : !coupon.is_enabled,
              }"
            >
              {{ coupon.is_enabled ? '已啟用' : '未啟用' }}
            </td>
            <td data-title="操作">
              <button
                class="btn btn-outline-brown-500 px-2 py-1"
                @click="opanCouponModal(false, coupon)"
              >
                修改
              </button>
            </td>
            <td data-title="刪除">
            <i
              class="bi bi-trash-fill btn btn-outline-danger"
              @click="delCouponSwalFn(coupon, 'one')"
            ></i>
          </td>
          </tr>
        </tbody>
      </table>
    </main>

    <DashboardPagination
      :pagination-isShow="isPaginationShow"
      :pagination-page="couponPagination"
      @get-data="getCoupons"
    ></DashboardPagination>

    <p class="text-center mt-1">
      {{ `共有 ${filterCoupon.length} 筆資料` }}
    </p>

    <DashboardCouponModal
      ref="couponModal"
      :modal-coupon="updataCouponData"
      :modal-isNew ="isNew"
      :modal-btn-status="btnStatus"
      @modal-update-coupon="updateCoupon"
    ></DashboardCouponModal>
  </div>
</template>

<script>
import { swalFn, delSwalFn, errorSwalFn } from '@/methods/swal';
import DashboardLoading from '@/components/loading/DashboardLoading.vue'; // 後台Loading元件
import DashboardPagination from '@/components/dashboard/DashboardPagination.vue';
import DashboardCouponModal from '@/components/modal/DashboardCouponModal.vue';

export default {
  name: 'DashboardCoupon',
  data() {
    return {
      loadingStatus: false,
      btnStatus: Boolean, // true 禁用; false 啟用
      couponSearch: '', // 搜尋功能
      couponPagination: {}, // 分頁
      couponDatas: [], // 優惠券資料 (有分頁)
      updataCouponData: {}, // 更新優惠券資料
      allCouponDatas: [], // 所有優惠券資料 (無分頁)
      filterDatas: [], // 暫存的商品分類列表
      isNew: Boolean, // modal新增/修改
      isPaginationShow: true, // 分頁狀態
    };
  },
  watch: {
    couponSearch() {
      if (this.couponSearch !== '') {
        this.isPaginationShow = false;
      } else if (this.couponSearch === '') {
        this.isPaginationShow = true;
      }
    },
  },
  computed: {
    filterCoupon() {
      let searchData = [];
      const newsearch = this.couponSearch.toUpperCase();

      if (this.couponSearch === '') {
        searchData = this.couponDatas;
      } else {
        searchData = this.allCouponDatas.filter((item) => item.code.match(newsearch));
      }
      return searchData;
    },
  },
  components: { DashboardLoading, DashboardPagination, DashboardCouponModal },
  methods: {
    getCoupons(page = 1) { // 取得優惠券
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupons?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.couponDatas = res.data.coupons;
            this.couponPagination = res.data.pagination;
            if (this.couponPagination.has_next) {
              this.isPaginationShow = true;
            }
            this.loadingStatus = false;
          } else {
            errorSwalFn('資料取得失敗', '請重新刷新頁面或使用重整按鈕');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('資料取得失敗', '請重新刷新頁面或使用重整按鈕');
          this.loadingStatus = false;
        });
    },
    getAllCoupons() { // 取得f全部優惠券
      this.allCouponDatas = [];
      if (this.couponPagination.has_next) {
        const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupons?page=${this.couponPagination.current_page + 1}`;

        this.$http.get(url)
          .then((res) => {
            if (res.data.success) {
              this.allCouponDatas = [...this.couponDatas, ...res.data.coupons];
            } else {
              errorSwalFn('資料取得失敗', '請重新刷新頁面或使用重整按鈕');
            }
          })
          .catch(() => {
            errorSwalFn('資料取得失敗', '請重新刷新頁面或使用重整按鈕');
          });
      }
    },
    renderAllDatas() {
      this.getCoupons();
      setTimeout(() => {
        this.getAllCoupons();
      }, 2500);
    },
    opanCouponModal(isNew, coupon) { // 打開 Modal
      if (isNew) {
        this.isNew = true;
        this.btnStatus = true;
        this.$refs.couponModal.resetForm();
        this.updataCouponData = {
          title: '',
          code: '',
          percent: 1,
          due_date: Math.floor(Date.now() / 1000),
          is_enabled: 0,
        };
      } else {
        this.isNew = false;
        this.btnStatus = false;
        this.updataCouponData = JSON.parse(JSON.stringify(coupon));
      }
      this.$refs.couponModal.openCouponModal();
    },
    updateCoupon(newCouponData) { // 更新優惠券
      let url = '';
      let httpMethods = '';
      this.loadingStatus = true;

      if (this.isNew) {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupon`;
        httpMethods = 'post';
      } else {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupon/${newCouponData.id}`;
        httpMethods = 'put';
      }

      this.$http[httpMethods](url, { data: newCouponData })
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.renderAllDatas();
            this.$refs.couponModal.hideCouponModal();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試');
          this.loadingStatus = false;
        });
    },
    delCoupon(variable) { // 刪除優惠券
      const { id } = variable;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupon/${id}`;
      this.loadingStatus = true;

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.renderAllDatas();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試');
          this.loadingStatus = false;
        });
    },
    delCouponSwalFn(data, action) { // 刪除單筆訂單的視窗
      delSwalFn(data, this.delCoupon, action);
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.couponSearch = '';
      this.renderAllDatas();
    },
  },
  mounted() {
    this.renderAllDatas();
    this.$refs.couponModal.resetForm();
  },
};
</script>
