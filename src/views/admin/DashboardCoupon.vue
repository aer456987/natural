<template>
  <DashboarLoading :status="loadingStatus"></DashboarLoading>
  <section class="container pageContent py-5">
    <h1 class="text-center fw-bold m-0 pb-5">優惠券管理</h1>
    <div class="row justify-content-between pb-2">
      <span class="col-md-5 col-lg-3 pb-1">
        <span class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠券名稱"
            aria-label="search"
            aria-describedby="basic-addon1"
            v-model="couponSearch"
          />
          <i
            class="bi bi-x-lg fs-6 btn btn-outline-brown input-group-text"
            @click="clearSearch"
          ></i>
        </span>
      </span>

      <span class="col-lg-6 text-end pb-1">
        <button
          class="btn btn-brown"
          @click="opanCouponModal(true)"
        >
          新增優惠券
        </button>
        <button
          type="button"
          class="btn btn-outline-brown btn-sm ms-1 fs-5"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </span>
    </div>

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
              'text-warning' : coupon.is_enabled,
              'text-gray' : !coupon.is_enabled,
            }"
          >
            {{ coupon.is_enabled ? '已啟用' : '未啟用' }}
          </td>
          <td data-title="操作">
            <button
              class="btn btn-outline-brown px-2 py-1"
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

    <Pagination
      :pagination-page="couponPagination"
      @get-data="getCoupons"
    ></Pagination>

    <CouponModal
      ref="couponModal"
      :modal-coupon="updataCouponData"
      :modal-isNew ="isNew"
      @modal-update-coupon="updateCoupon"
    ></CouponModal>
  </section>
</template>

<script>
import { swalFn, delSwalFn } from '@/methods/swal'; // , delSwalFn
import DashboarLoading from '@/components/loading/DashboarLoading.vue'; // 後台Loading元件
import Pagination from '@/components/dashboar/DashboarPagination.vue';
import CouponModal from '@/components/modal/DashboarCouponModal.vue';

export default {
  name: 'DashboardCoupon',
  data() {
    return {
      loadingStatus: false,
      btnStatus: Boolean, // true 禁用; false 啟用
      couponSearch: '',
      couponPagination: {},
      couponDatas: [],
      isNew: Boolean,
      updataCouponData: {},
    };
  },
  computed: {
    filterCoupon() {
      return this.couponDatas.filter((item) => item.title.match(this.couponSearch));
    },
  },
  components: { DashboarLoading, Pagination, CouponModal },
  methods: {
    getCoupons(page = 1) { // 取得優惠券
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupons?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.couponDatas = res.data.coupons;
            this.couponPagination = res.data.pagination;
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-後台)取得優惠券 res', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)取得優惠券 err', err);
          this.loadingStatus = false;
        });
    },
    opanCouponModal(isNew, coupon) { // 打開 Modal
      if (isNew) {
        this.isNew = true;
        this.btnStatus = true;
        this.updataCouponData = {
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
            this.getCoupons();
            this.$refs.couponModal.hideCouponModal();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)修改優惠券 err', err);
          this.loadingStatus = false;
        });
    },
    delCoupon(action, id) { // 刪除優惠券
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/coupon/${id}`;
      this.loadingStatus = true;

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.getCoupons();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)刪除優惠券 err', err);
          this.loadingStatus = false;
        });
    },
    delCouponSwalFn(data, action) { // 刪除單筆訂單的視窗
      const { title, id } = data;
      delSwalFn(title, id, this.delCoupon, action);
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.clearSearch();
      this.getCoupons();
    },
    clearSearch() { // 清除搜尋
      this.couponSearch = '';
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
