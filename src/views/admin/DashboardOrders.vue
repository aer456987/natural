<template>
  <DashboarLoading :status="loadingStatus"></DashboarLoading>
  <section class="container pageContent py-5 overflow-auto">
    <h1 class="text-center fw-bold m-0 pb-5">訂單管理</h1>
    <div class="row justify-content-between pb-2">

      <div class="col-md-6 col-lg-5 col-xl-4 pb-1">
        <span class=" input-group">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入訂單編號"
            aria-label="search"
            aria-describedby="basic-addon1"
            v-model="orderSearch"
          />
          <i
            class="bi bi-x-lg fs-6 btn btn-outline-brown input-group-text"
            @click="clearSearch"
          ></i>
        </span>
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
          class="btn btn-outline-brown btn-sm fs-5 ms-1"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table
        class="table table-hover rounded overflow-hidden shadow-sm
          text-break text-center"
      >
        <thead class="table-dark align-middle">
          <tr>
            <td width="10%">建立時間</td>
            <td width="15%">訂單編號</td>
            <td width="10%">訂購人</td>
            <td width="12%">Email</td>
            <td width="15%">訂單內容</td>
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

            <td
              data-title="訂單編號"
              class="text-warning"
            >
              {{ order.id }}
            </td>

            <td data-title="訂購人">
              {{ order.user.name }}
            </td>

            <td data-title="Email">
              {{ order.user.email }}
            </td>

            <td
              data-title="訂單內容"
              class="text-start"
            >
              <p
                v-for="item in order.products"
                :key="item.id"
                class="m-0"
              >
                {{ `${item.product.title} x ${item.qty}${item.product.unit}` }}
              </p>
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
                <!-- v-if="order.is_paid" -->
              <span
                v-if="order.user.payment ==='貨到付款' || order.is_paid"
                class="m-0"
                :class="{
                  'text-warning' : order.is_consignment,
                  'text-success' : !order.is_consignment,
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
                class="btn btn-outline-brown px-2 py-1"
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
            <!-- {{ order }} -->
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination
      :pagination-isShow="isPaginationShow"
      :pagination-page="ordersPagination"
      @get-data="getOrders"
    ></Pagination>

    <OrderModal
      ref="orderModal"
      :modal-order="tempOrderData"
      @modal-update-order-paid="updateOrderPaid"
    ></OrderModal>
  </section>
</template>

<script>
import { swalFn, delSwalFn, doubleCheckdelSwalFn } from '@/methods/swal';
import DashboarLoading from '@/components/loading/DashboarLoading.vue'; // 後台Loading元件
import Pagination from '@/components/dashboar/DashboarPagination.vue';
import OrderModal from '@/components/modal/DashboarOrderModal.vue';

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
  components: { DashboarLoading, Pagination, OrderModal },
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
            swalFn('資料取得失敗', 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('資料取得失敗', 'error');
          this.loadingStatus = false;
        });
    },
    delOrder(action, id) { // 刪除單筆訂單
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
          swalFn('操作失敗', 'error');
          this.loadingStatus = false;
        });
    },
    delOrderSwalFn(data, action) { // 刪除單筆訂單的視窗
      const { id } = data;
      delSwalFn(id, id, this.delOrder, action);
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
          swalFn('操作失敗', 'error');
          this.loadingStatus = false;
        });
    },
    openOrderModal(order) { // 打開訂單視窗
      this.tempOrderData = JSON.parse(JSON.stringify(order));
      this.$refs.orderModal.openOrderModal();
    },
    resetData() { // 重整資料
      swalFn('正在重整資料', 'info');
      this.clearSearch();
      this.getOrders();
    },
    clearSearch() { // 清除搜尋
      this.orderSearch = '';
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
