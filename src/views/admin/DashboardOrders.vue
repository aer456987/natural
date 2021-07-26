<template>
  <DashboardLoading :status="loadingStatus"></DashboardLoading>
  <section class="container pageContent py-5 overflow-auto">
    <h2 class="h1 text-center fw-bold m-0 pb-5">
      訂單管理
    </h2>
    <div class="row justify-content-between pb-2">
      <div class="col-md-6 col-lg-5 col-xl-4 pb-1">
        <div class=" input-group">
          <input
            type="search"
            class="form-control"
            placeholder="請輸入訂單編號"
            aria-label="search"
            aria-describedby="basic-addon1"
            id="orderSearch"
            v-model="orderSearch"
          />
          <label
            for="orderSearch"
            class="input-group-text"
          >
            <i class="bi bi-search fs-6"></i>
          </label>
        </div>
      </div>

      <div class="col-md-6 text-end pb-1">
        <button
          class="btn btn-outline-danger"
          @click="delAllOrderSwalFn('all')"
        >
          刪除全部訂單
        </button>

        <button
          type="button"
          class="btn btn-outline-brown-500 btn-sm fs-5 ms-1"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>

    <main class="table-responsive">
      <table
        class="table table-hover rounded overflow-hidden shadow-sm
          text-break text-center"
      >
        <thead class="table-dark align-middle">
          <tr>
            <td width="10%">建立時間</td>
            <td width="20%">訂單編號</td>
            <td width="15%">訂購人</td>
            <td width="17%">Email</td>
            <td width="8%">總金額</td>
            <td width="8%">付款狀態</td>
            <td width="8%">處理進度</td>
            <td width="7%">操作</td>
            <td width="7%">刪除</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in filterOrder"
            :key="order.id"
          >

            <td data-title="建立時間">
              {{ $filters.date(order.create_at) }}
            </td>

            <td data-title="訂單編號">
              {{ order.id }}
            </td>

            <td data-title="訂購人">
              {{ order.user.name }}
            </td>

            <td data-title="Email">
              {{ order.user.email }}
            </td>

            <td data-title="總金額">
              $ {{ $filters.currency(order.total) }}
            </td>

            <td
              data-title="付款狀態"
              :class="{ 'text-gray' : !order.is_paid }"
              :title="`付款日期： ${ $filters.date(order.paid_date) }`"
            >
              {{ order.is_paid ? '已付款' : '未付款' }}
            </td>

            <td data-title="處理進度">
              <span
                v-if="order.user.payment ==='貨到付款' || order.is_paid"
                class="m-0"
                :class="{
                  'text-warning-dark' : order.is_consignment,
                  'text-danger' : !order.is_consignment,
                }"
              >
                {{ order.is_consignment ? '已出貨' : '處理中' }}
              </span>
              <span
                v-else
                class="text-gray"
              >
                訂單成立
              </span>
            </td>

            <td data-title="操作">
              <button
                class="btn btn-outline-brown-500 px-2 py-1"
                @click="openOrderModal(order)"
              >
                更多
              </button>
            </td>

            <td data-title="刪除">
              <i
                class="bi bi-trash-fill btn btn-outline-danger"
                @click="delOrderSwalFn(order, 'one')"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </main>

    <DashboardPagination
      :pagination-isShow="isPaginationShow"
      :pagination-page="ordersPagination"
      @get-data="getOrders"
    ></DashboardPagination>

    <DashboardOrderModal
      ref="orderModal"
      :modal-order="tempOrderData"
      @modal-update-order-paid="updateOrderPaid"
    ></DashboardOrderModal>
  </section>
</template>

<script>
import {
  swalFn,
  errorSwalFn,
  delSwalFn,
  doubleCheckdelSwalFn,
} from '@/methods/swal';
import DashboardLoading from '@/components/loading/DashboardLoading.vue'; // 後台Loading元件
import DashboardPagination from '@/components/dashboard/DashboardPagination.vue';
import DashboardOrderModal from '@/components/modal/DashboardOrderModal.vue';

export default {
  name: 'DashboardOrders',
  data() {
    return {
      loadingStatus: false, // Loading 狀態
      orderSearch: '', // 搜尋
      ordersPagination: {}, // 分頁
      orders: [], // 原始資料
      tempOrderData: {}, // 存放新增 & 修改資料
      isPaginationShow: true, // 分頁狀態
    };
  },
  watch: {
    orderSearch() {
      if (this.orderSearch !== '') {
        if (this.filterOrder.length > 9) {
          this.isPaginationShow = true;
        } else {
          this.isPaginationShow = false;
        }
      } else if (this.orderSearch === '') {
        this.isPaginationShow = true;
      }
    },
  },
  computed: {
    filterOrder() { // 渲染資料
      return this.orders.filter((item) => item.id.match(this.orderSearch));
    },
  },
  components: { DashboardLoading, DashboardPagination, DashboardOrderModal },
  methods: {
    getOrders(page = 1) { // 取得訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/orders?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.ordersPagination = res.data.pagination;
            if (this.ordersPagination.total_pages > 1) {
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
    delOrder(variable) { // 刪除單筆訂單
      const { action, id } = variable;

      let url = '';
      this.loadingStatus = true;

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/orders/all`;
      } else if (action === 'one') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/order/${id}`;
      }

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.getOrders();
            swalFn(res.data.message, 'success');
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
    delOrderSwalFn(data, action) { // 刪除單筆訂單的視窗
      delSwalFn(data, this.delOrder, action);
    },
    delAllOrderSwalFn(action) { // 刪除全部訂單的視窗(雙重確認)
      doubleCheckdelSwalFn(action, this.delOrder);
    },
    updateOrderPaid(paidData) { // 修改訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/order/${paidData.id}`;
      this.loadingStatus = true;

      if (paidData.is_paid) {
        this.tempOrderData.paid_date = Date.parse(new Date()) / 1000;
      } else {
        this.tempOrderData.paid_date = null;
      }

      this.$http.put(url, { data: paidData })
        .then((res) => {
          if (res.data.success) {
            this.$refs.orderModal.hideOderModal();
            swalFn(res.data.message, 'success');
            this.getOrders();
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
    openOrderModal(order) { // 打開訂單視窗
      this.tempOrderData = JSON.parse(JSON.stringify(order));
      this.$refs.orderModal.openOrderModal();
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.orderSearch = '';
      this.getOrders();
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
